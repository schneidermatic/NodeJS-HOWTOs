// Source: https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs
// Import the necessary libraries/declare the necessary objects
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`What's your name? `, name => {
    console.log(`Hi ${name}!`);
    readline.close();
});