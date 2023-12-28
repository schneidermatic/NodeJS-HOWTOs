// Import the necessary libraries/declare the necessary objects
const express = require("express");
const app = express();
const port = 3000;

// Get Response http://localhost:3000
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
