const fs = require('fs')
const crypto = require('crypto')

const copyFileWithStream = (src, dest, callback) => {
  fs.createReadStream(src)
    .pipe(crypto.createHash('sha256'))
    .pipe(fs.createWriteStream(dest))
    .on('finish', () => callback('finish'))
}

copyFileWithStream('copyFile.js', 'unchi.js', console.log)
