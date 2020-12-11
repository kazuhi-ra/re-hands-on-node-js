new Promise((resolve) => resolve('yo')).then(console.log)
Promise.resolve('yo').then(console.log)

new Promise((_, reject) => reject(new Error('エラーです'))).catch(console.log)
Promise.reject(new Error('エラーです')).catch(console.log)
