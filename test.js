const { CoinhivePromiseLib } = require('./index.js')
const coinhive = CoinhivePromiseLib('SECRET HASH')

coinhive.verify({token: "token"})
  .then(console.log)
  .catch(console.error)
