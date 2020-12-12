const fs = require('fs')

const copyFile = (src, dest, callback) => {
  fs.readFile(src, (err, data) => {
    if (err) callback(err)
    fs.writeFile(dest, data, callback)
  })
}

copyFile('copyFile.js', 'unchi.js', console.log)
