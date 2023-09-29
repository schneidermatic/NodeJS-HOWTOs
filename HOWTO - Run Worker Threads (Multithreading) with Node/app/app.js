const express = require("express");
const { Worker } = require("node:worker_threads");
const app = express();
const port = 3000;
let worker = "";
let current_worker_id = "";
let last_worker_id = "";
let heartbeat = "";

// Get the current Status of the Worker-Thread
app.get("/", function(req, res) {
  if ( current_worker_id ) {
    res.json({ "status": `Worker-Thread (${current_worker_id}) last run ${heartbeat}` });
  } else {
    res.json({ "status": "No Worker-Thread is not running!!!" });
  }
});

// Start the Worker-Thread
app.get("/start", function(req, res) {
    if (current_worker_id == "") { 
      worker = new Worker("./worker.js");
      current_worker_id = last_worker_id = worker.threadId;
      res.setHeader('Content-Type', 'application/json');

      worker.on("message", (evtmsg) => {
        heartbeat = evtmsg
        res.end(JSON.stringify({ heartbeat: `${evtmsg}`}));
      });
    } else {
      res.json({ "status": `Worker-Thread (${current_worker_id}) already started!!!` });
    }
});

// Stop the Worker-Thread
app.get("/stop", function(req, res) {
    worker.terminate();
    current_worker_id = "";
    res.json({ "status": `Worker-Thread (${last_worker_id}) stopped!!!` });
});


// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`==> Server is listening on port ${port} ...`));