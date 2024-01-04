// source: https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
// Import the necessary libraries/declare the necessary objects
const { spawn } = require("child_process");

const ls = spawn("ls", ["-ltra", "."]);

ls.stdout.on("data", data => {
    console.log(`stdout ${data}`)
});

ls.stderr.on("data", data => {
    console.log(`stderr ${data}`)
});

ls.on("error", error => {
    console.log(`error, ${error.message}`)
});

ls.on("close", code => {
    console.log(`Process exited with code, ${code}`)
});

const child = spawn('echo THE ANSWER IS: $ANSWER && echo "---" && echo ""', {
    stdio: 'inherit',
    shell: true,
    env: { ANSWER: 42 },
});
