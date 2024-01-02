// Import the necessary libraries/declare the necessary objects
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

let httpsOptions = {
    key: fs.readFileSync("ssl/key.pem"),
    cert: fs. readFileSync("ssl/cert.pem")
};

// Get Response http://localhost
http.createServer(app).listen(8080);
// Get Response https://localhost:443
https.createServer(httpsOptions, app).listen(443);