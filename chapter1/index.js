const add = require('./add')
const kazuhira = require('./kazuhira.json')

console.log(add(10, 20))
console.log(kazuhira, typeof kazuhira)
console.log(__filename, typeof __filename)
console.log(__dirname)
