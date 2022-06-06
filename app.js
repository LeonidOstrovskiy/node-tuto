//npm global command comes with node
//npm --version

//local dependency - use it only in this particular project
// npm i packageName

//global dependency to use in any project
//npm install -g packageName
//sudo install -g packagename( mac )

//package.json - manifest file with infos about project/package
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);

console.log(newItems);