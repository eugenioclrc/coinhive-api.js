const Api = require('./api.js')

function makeCb (resolve, reject) {
  return (err, response, body) => {
    if (err) {
      reject(err)
      return
    }
    resolve(body)
  }
}

module.exports = function createApi (secret) {
  const api = Api(secret)

  const promiseFunc = {}

  Object.keys(api).forEach(f => {
    const funcObject = api[f]
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
