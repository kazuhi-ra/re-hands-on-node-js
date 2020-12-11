const parseJSONAsync = (json, callback) => {
  setTimeout(() => {
    try {
      callback(null, JSON.parse(json))
    } catch (err) {
      callback(err)
    }
  }, 100)
}

const cache = {}
const parseJSONAsyncWithCache = (json, callback) => {
  const cached = cache[json]
  if (cached) {
    setTimeout(() => callback(cached.err, cached.result), 0)
    return
  }
  parseJSONAsync(json, (err, result) => {
    cache[json] = { err, result }
    callback(err, result)
  })
}

parseJSONAsyncWithCache('{ "name": "kazuhira" }', console.log)
parseJSONAsyncWithCache('{ "name": "kazuhira" }', console.log)

setTimeout(
  () => parseJSONAsyncWithCache('{ "name": "kazuhira" }', console.log),
  100
)
