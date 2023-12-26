// Import the necessary libraries/declare the necessary objects
const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const port = 3000;

let publicPath = path.resolve(__dirname, "files/public")
let uploadsPath = path.resolve(__dirname, "files/uploads")

function getProfilePhotoPath(userid) {
  return path.resolve(__dirname, `files/users/${userid}/profile.png`)
}

// http://localhost:3000/public/nodejs.png
app.use("/public", express.static(publicPath))

// http://localhost:3000/uploads/python.png
app.use("/uploads", express.static(uploadsPath))

// http://localhost:3000/user/123/profile
app.get("/user/:userid/profile", function (req, res) {
  res.sendFile(getProfilePhotoPath(req.params.userid))
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));