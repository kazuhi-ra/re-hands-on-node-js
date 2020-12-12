const fs = require('fs')

const copyFileWithStream = (src, dest, callback) => {
  fs.createReadStream(src)
    .pipe(fs.createWriteStream(dest))
    .on('finish', () => callback('finish'))
}

copyFileWithStream('copyFile.js', 'unchi.js', console.log)
