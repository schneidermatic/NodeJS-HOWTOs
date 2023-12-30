// Import the necessary libraries/declare the necessary objects
const express = require("express");
const app = express();
const port = 3000;

// Read from the Environment Variable 'RESP_MESSAGE'
const RESP_MESSAGE = process.env.RESP_MESSAGE;

app.use( (req, res) => { res.end(RESP_MESSAGE) } );

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
