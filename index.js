const CoinhiveApi = require('./api.js')
const CoinhivePromiseApi = require('./promise-api.js')

module.exports = {
  CoinhiveApi,
  default: CoinhiveApi,
  CoinhivePromiseApi
}
