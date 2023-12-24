// Import the necessary libraries/declare the necessary objects
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", {
        message: "Node.js is up and running!"
    });
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
