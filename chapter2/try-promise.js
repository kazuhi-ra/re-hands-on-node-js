const parseJSONAsync = json => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(json))
      } catch (err) {
        reject(err)
      }
    }, 100)
  })
}

parseJSONAsync('{ "name": "kazuhira" }').then(console.log).catch(console.log)
