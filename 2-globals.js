// GLOBAL Variables - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed
// console - console is also an global variable which helps to print values on terminal

// there are many more global variables
console.log(__dirname);
console.log(__filename);
setInterval(() => {
  console.log("Hello World !!!");
}, 1000);
setTimeout(() => {
  console.log("Hello Another World !!!");
}, 2000);

// setInterval and setTimeout can also be used in node js
