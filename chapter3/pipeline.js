const stream = require('stream')
const HelloReadableStream = require('./HelloReadableStream')
const DelayLogStream = require('./DelayLogStream')
const LineTransformStream = require('./LineTransformStream')

// new HelloReadableStream(null, ['Ruby', 'TypeScript'])
//   .pipe(new LineTransformStream())
//   .pipe(new DelayLogStream())
//   .on('finish', () => console.log('完了'))

stream.pipeline(
  new HelloReadableStream(null, ['Ruby', 'TypeScript']),
  new LineTransformStream(),
  new DelayLogStream(),
  err => (err ? console.log(err) : console.log('正常終了'))
)
