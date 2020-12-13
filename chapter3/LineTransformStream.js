const stream = require('stream')

class LineTransformStream extends stream.Transform {
  remaining = ''
  constructor(options) {
    super({ readableObjectMode: true, ...options })
  }

  _transform(chunk, encoding, callback) {
    console.log('_transform()')
    const lines = (chunk + this.remaining).split(/\n/)
    this.remaining = lines.pop()
    for (const line of lines) {
      this.push({ message: line, delay: line.length * 100 })
    }
    callback()
  }

  _flush(callback) {
    console.log('_flush()')
    this.push({
      message: this.remaining,
      delay: this.remaining.length * 100,
    })
    callback()
  }
}

const lineTransformStreamnew = new LineTransformStream()

lineTransformStreamnew
  .on('readable', () => {
    let chunk
    while ((chunk = lineTransformStreamnew.read()) !== null) {
      console.log(chunk)
    }
  })
  .write('foo\nbar')
  // .write('baz')
  // .end()
