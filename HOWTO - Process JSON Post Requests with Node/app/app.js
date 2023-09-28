// Import the necessary libraries/declare the necessary objects
const data = require("./module/data");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Parse request body
app.use(bodyParser.json());

app.use(function (req, res, next) {
    if ( req.body.name === "Leo") {
      next();
    } else {
      res.status(400).send("Wrong data!")
    }
});

app.post("/api/v1", function(req, res) {
      console.log(req.body);
      data(req.body);
      res.json({"status": "processed"});
});


// Start the server and make it listen for connections on port 3000
app.listen(port);