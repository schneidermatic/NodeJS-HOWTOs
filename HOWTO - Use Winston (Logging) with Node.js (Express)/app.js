const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
});

// Middleware to log requests
app.use((req, res, next) => {
    logger.info(`Received request: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
    logger.info('Sent response: Hello, world!');
});

app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
});