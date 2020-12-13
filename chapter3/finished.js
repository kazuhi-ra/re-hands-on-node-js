const fs = require('fs')
const stream = require('stream')

stream.finished(
  fs.createReadStream('copyFile.jdlsfjlsdks').on('data', () => {}),
  err => (err ? console.log(err) : console.log('正常終了'))
)
