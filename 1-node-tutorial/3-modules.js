// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
console.log(names);

const printName = require("./5-utlis");
printName(names.firstName);
printName(names.lastnName);
printName("Krishna");

const data = require("./6-alternative-flavor");
console.log(data);

require("./7-mind-grenade");
