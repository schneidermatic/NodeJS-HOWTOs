// Import the necessary libraries/declare the necessary objects
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.send("Welcome to the Node.js Galaxy!")
});

app.get("/what", (req, res) => {
    res.send("Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.")
});

app.get("/why", (req, res) => {
    res.send("Node.js® is a robust solution for building dynamic and single-page web applications.")
});

app.use((req, res) => {
    res.statusCode = 404;
    res.end("Here is a 404!");
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
