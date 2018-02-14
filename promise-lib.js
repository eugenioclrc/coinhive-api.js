const CoinhiveLib = require('./lib.js')

function makeCb (resolve, reject) {
  return (err, response, body) => {
    if (err) {
      reject(err)
      return
    }
    resolve(body)
  }
}

module.exports = function createLib (secret) {
  const coinhiveLib = CoinhiveLib(secret)

  const promiseFunc = {}

  Object.keys(coinhiveLib).forEach(f => {
    const funcObject = coinhiveLib[f]
    promiseFunc[f] = (opts) => {
      return new Promise((resolve, reject) => {
        if (funcObject.length === 1) {
          funcObject(makeCb(resolve, reject))
        } else {
          funcObject(opts, makeCb(resolve, reject))
        }
      })
    }
  })

  return promiseFunc
}
