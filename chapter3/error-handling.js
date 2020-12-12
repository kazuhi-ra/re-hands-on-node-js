const events = require('events')

try {
  new events.EventEmitter()
    // .on('error', err => console.log('errorイベント'))
    .emit('error', new Error('エラーどす'))
} catch (err) {
  console.log('catch', err)
}
