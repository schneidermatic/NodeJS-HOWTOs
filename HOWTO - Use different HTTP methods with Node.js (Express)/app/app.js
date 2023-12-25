// Import the necessary libraries/declare the necessary objects
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Success: GET request processed!");
});

app.post("/", (req, res) => {
    res.send("Success: POST request processed!");
});

app.put("/", (req, res) => {
    res.send("Success: PUT request processed!");
});

app.delete("/", (req, res) => {
    res.send("Success: DELETE request processed!");
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
