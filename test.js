const { CoinhivePromiseApi } = require('./index.js')
const coinhive = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')

coinhive.statsSite().then(console.log)
