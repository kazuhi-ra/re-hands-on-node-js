const parseJSONasync = (json, callback) => {
  try {
    setTimeout(() => callback(JSON.parse(json)), 100)
  } catch (err) {
    console.log('error', err)
    callback({})
  }
}

parseJSONasync('yo', result => {
  console.log('結果', result)
})
