const asyncFunc1 = n => Promise.resolve(n)
const asyncFunc2 = n => Promise.resolve(n * 2)
const asyncFunc3 = n => Promise.resolve(n * 10)
// const asyncFunc3 = n => Promise.reject('errorです')

const asyncAwait = async n => {
  try {
    const result1 = await asyncFunc1(n)
    const result2 = await asyncFunc2(result1)
    const result3 = await asyncFunc3(result2)
    console.log(result3)
  } catch (err) {
    console.log(err)
  }
}

asyncAwait(10)
