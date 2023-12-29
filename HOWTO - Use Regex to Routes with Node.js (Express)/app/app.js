// Import the necessary libraries/declare the necessary objects
const express = require("express");
const app = express();
const port = 3000;

// Get the Parameter http://localhost:3000/users/900-999
app.get(/^\/users\/(\d+)-(\d+)$/, (req, res) => {
    let beginId = parseInt(req.params[0], 10);
    let endId = parseInt(req.params[1], 10);
    res.end("User IDs begin: " + beginId + " - end: " + endId);
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));