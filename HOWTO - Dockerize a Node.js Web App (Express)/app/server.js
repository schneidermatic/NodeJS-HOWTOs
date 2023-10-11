// Import the necessary libraries/declare the necessary objects
const express = require('express');
const path = require('path');
const router = require("./routes/routes");
const logger = require("morgan");
const createError = require('http-errors');
const port = 3000;

const app = express();

// define view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

// define logger
app.use(logger('combined'));

// define routing
app.use(router); 

app.use(function(req, res, next) {
    next(createError(404));
});
  
// define error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use( (req, res) => {
    res.send("Hello World!");
});

// Start the server and make it listen for connections on port 3000
app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
