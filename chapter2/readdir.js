'use strict'
const fs = require('fs')

fs.readdir('.', (err, files) => {
  console.log('fs.readdir()実行結果')
  console.log('err', err)
  console.log('files', files)
})

fs.readdir('hey', (err, files) => {
  console.log('fs.readdir()実行結果2')
  console.log('err', err)
  console.log('files', files)
})
