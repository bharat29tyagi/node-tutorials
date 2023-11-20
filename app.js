// npm -  global command, comes with Node
// npm --version

// local dependency - use it only in this particular Project
// npm i <packageName>

// global dependency - use it in any Project
// npm install -g <packageName>
// sudo install -g <packageName> (mac, linux)

// package.json - manifest file (stores important info about our project/package)
// manual approach (create package.json in the ShadowRoot, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems); // [ 1, 2, 3, 4 ]
