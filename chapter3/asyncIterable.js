const HelloReadableStream = require('./HelloReadableStream')

const helloReadableStream = new HelloReadableStream(null, [
  'Ruby',
  'JavaScript',
  'Perl',
]).on('end', () => console.log('完了'))

;(async () => {
  for await (const data of helloReadableStream) {
    console.log('data', data.toString())
  }
})()
