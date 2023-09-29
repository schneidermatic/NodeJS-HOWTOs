const { parentPort } = require("node:worker_threads");

let evtmsg = "";

setInterval(function () { 
    evtmsg = new Date();
    parentPort.postMessage(evtmsg);
    console.log(`Worker-Thread last run ${evtmsg}`);
}, 1000);