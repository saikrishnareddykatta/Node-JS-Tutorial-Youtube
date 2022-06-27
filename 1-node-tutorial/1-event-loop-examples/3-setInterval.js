setInterval(() => {
  console.log("I will run for every 2 seconds");
}, 2000);
console.log("I will run first");
// process stays alive unless you kill
// Press Ctrl + C to kill the process
// unexpected error

setInterval(() => {
  console.log("I will run for every 1 second");
}, 1000);

console.log("I will run second");
