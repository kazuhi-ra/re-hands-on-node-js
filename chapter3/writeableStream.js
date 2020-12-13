const fs = require('fs')

const fileWriteStream = fs.createWriteStream('unchi.txt')

fileWriteStream.write('unchi1\n')
fileWriteStream.write('unchi2\n')
fileWriteStream.end()
