// Import the necessary libraries/declare the necessary objects
const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const port = 3000;

function getImagePath(name) {
    return path.resolve(__dirname, `public/${name}.png`)
}

app.get("/", function (req, res) {
    res.send("<h1>Node.js is up and running!</h1>");
});

// http://localhost:3000/image/node => Get the node.js image!
// http://localhost:3000/image/xxx  => Get the Internal Server Error!
app.get("/image/:name", function (req, res) {
    res.sendFile(getImagePath(req.params.name));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500);
    res.send("<h1 style='color:red;'>Internal Server Error!</h1>");
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));