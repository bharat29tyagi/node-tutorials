const os = require('os');

// info about current user
const user = os.userInfo() 
console.log(user)

// method returning teh system time in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.platform(),
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);