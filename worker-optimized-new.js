// create worker separate file
const { parentPort } = require("worker_threads")

let result = 0;
for (let i = 0; i < 1000000000000; i++) {
    result++;        
}

parentPort.postMessage(result)