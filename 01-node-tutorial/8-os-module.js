const os = require("os");

//information about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);
console.log(`The system Uptime is ${os.uptime() / 60} minutes`);
console.log(`The system Uptime is ${os.uptime() / 3600} hours`);
console.log(`The system Uptime is ${os.uptime() / 86400} days`);

const currentOS = {
  name: os.type(),
  relase: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
