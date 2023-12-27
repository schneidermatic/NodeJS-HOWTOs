// Import the necessary libraries/declare the necessary objects
const express = require("express");
const app = express();
const port = 3000;

// Get the Parameter http://localhost:3000/users/Markus
app.get("/users/:name", (req, res) => {
    res.end("Hello, " + req.params.name + "!")
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
