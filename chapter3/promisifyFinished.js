const fs = require('fs')
const stream = require('stream')
const util = require('util')

const promisifyFinished = async () => {
  try {
    await util.promisify(stream.finished)(
      fs.createReadStream('coplksdjfyFile.js').on('data', () => {})
    )
    console.log('正常終了')
  } catch (err) {
    console.log(err)
  }
}
promisifyFinished()