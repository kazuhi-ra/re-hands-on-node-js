const stream = require('stream')

class DelayLogStream extends stream.Writable {
  constructor(options) {
    super({ objectMode: true, options })
  }

  _write(chunk, encoding, callback) {
    console.log('_write()')
    const { message, delay } = chunk
    setTimeout(() => {
      console.log('message', message)
      callback()
    }, delay)
  }
}

new DelayLogStream().write({ message: 'Yo', delay: 1000 }, () =>
  console.log('DONE')
)

module.exports = DelayLogStream