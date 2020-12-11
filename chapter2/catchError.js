const parseJSONasync = (json, callback) => {
  setTimeout(() => {
    try {
      callback(null, JSON.parse(json))
    } catch (err) {
      callback(err)
    }
  }, 100)
}


parseJSONasync('{ "name": "kazuhira" }', (err, result) => {
  console.log('結果', err, result)
})

parseJSONasync('yo', (err, result) => {
  console.log('結果', err, result)
})
