const stream = require('stream')

class HelloReadableStream extends stream.Readable {
  constructor(options, languages) {
    super(options)
    this.languages = languages
  }

  _read() {
    let language

    while ((language = this.languages.shift())) {
      if (!this.push(language)) {
        console.log('読み込み中断')
        return
      }
    }
    console.log('読み込み完了')
    this.push(null)
  }
}

const helloReadableStream = new HelloReadableStream(null, [
  'JavaScript',
  'TypeScript',
  'Ruby',
])
helloReadableStream
  .on('readable', () => {
    console.log('readable')
    let chunk
    while ((chunk = helloReadableStream.read()) !== null) {
      console.log(chunk.toString())
    }
  })
  .on('end', () => console.log('end'))

module.exports = HelloReadableStream