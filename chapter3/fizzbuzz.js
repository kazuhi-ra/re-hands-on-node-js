const events = require('events')

// 処理の順番(同期ver)
// createFizzBuzzEventEmitter(10) 発動
// eventEmitter誕生 -> _emitFizzBuzz発動(同期)
// startがemit -> countが誕生 -> 10msのsleep
// startからendまでイベントが登録される
// 10ms経って、sleepより後ろの同期処理が実行される
// endがemit

// 処理の順番(非同期ver)
// createFizzBuzzEventEmitter(10) 発動
// eventEmitter誕生 -> _emitFizzBuzz発動(非同期)
// startからendまでイベントが登録される
// startがemit -> countが誕生 -> 10msのsleep
// 10ms経って、sleepより後ろの同期処理が実行される
// endがemit

const createFizzBuzzEventEmitter = until => {
  const eventEmitter = new events.EventEmitter()
  process.nextTick(() => _emitFizzBuzz(eventEmitter, until))
  return eventEmitter
}

const _emitFizzBuzz = async (eventEmitter, until) => {
  eventEmitter.emit('start')
  let count = 1
  while (count <= until) {
    await new Promise(resolve => setTimeout(resolve, 10))
    if (count % 15 === 0) {
      eventEmitter.emit('FizzBuzz', count)
    } else if (count % 3 === 0) {
      eventEmitter.emit('Fizz', count)
    } else if (count % 5 === 0) {
      eventEmitter.emit('Buzz', count)
    }
    count++
  }
  eventEmitter.emit('end')
}

function startListener() {
  console.log('start')
}
function fizzListener(count) {
  console.log('Fizz', count)
}
function buzzListener(count) {
  console.log('Buzz', count)
}
function fizzBuzzListener(count) {
  console.log('FizzBuzz', count)
}

function endListener() {
  console.log('end')
  this.off('start', startListener)
    .off('Fizz', fizzListener)
    .off('Buzz', buzzListener)
    .off('FizzBuzz', fizzBuzzListener)
    .off('end', endListener)
}

createFizzBuzzEventEmitter(10)
  .on('start', startListener)
  .on('Fizz', fizzListener)
  .once('Buzz', buzzListener) // Buzzイベントだけonceで登録
  .on('FizzBuzz', fizzBuzzListener)
  .on('end', endListener)
