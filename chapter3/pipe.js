const HelloReadableStream = require('./HelloReadableStream')
const DelayLogStream = require('./DelayLogStream')
const LineTransformStream = require('./LineTransformStream')

new HelloReadableStream(null, ['Ruby', 'TypeScript'])
  .pipe(new LineTransformStream())
  .pipe(new DelayLogStream())
  .on('finish', () => console.log('完了'))
