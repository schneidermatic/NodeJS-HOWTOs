// Import the necessary libraries/declare the necessary objects
const express = require("express");
const app = express();
const port = 3000;

NOT_ALLOWED = "/notallowed";

app.get("/", (req, res) => {
    res.end("<h1>Node.js is up and running!</h1>");
});

// Send Status Code 401
// http://localhost:3000/notallowed
app.use((req, res, next) => {
    if(req.url === NOT_ALLOWED) {
        res.status(401).send("<h1>Not allowed!</h1>");
    } else {
        next();
    }
});

// Send Status Code 404
// http://localhost:3000/about
app.use((req, res) => {
    res.statusCode = 404;
    res.end("Status: 404");
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
