// npm - global command, comes with node
// npm --v

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac) (In Mac, most likely the password will be asked)

// package.json - manifest file (stores important info about project/package)
// 3 ways to create package.json file
// 1. manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip)
// 3. npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
