const request = require('request')

module.exports = function createApi (secret) {
  // https://coinhive.com/documentation/http-api#token-verify
  function verify ({ token = '', hashes = '' }, cb) {
    request.post({
      url: 'https://api.coinhive.com/token/verify',
      form: { secret, token, hashes }
    }, cb)
  }

  // user balance
  // https://coinhive.com/documentation/http-api#user-balance
  function userBalance ({ name = '' }, cb) {
    request.get({
      url: 'https://api.coinhive.com/user/balance',
      qs: { secret, name }
    }, cb)
  }

  // user withdraw
  // https://coinhive.com/documentation/http-api#user-withdraw
  function userWithdraw ({ name = '', amount = '' }, cb) {
    request.post({
      url: 'https://api.coinhive.com/token/withdraw',
      form: { secret, name, amount }
    }, cb)
  }

  // user top
  // https://coinhive.com/documentation/http-api#user-top
  function userTop ({ count = '', order = '' }, cb) {
    request.get({
      url: 'https://api.coinhive.com/user/top',
      qs: { secret }
    }, cb)
  }

  // user list
  // https://coinhive.com/documentation/http-api#user-list
  function userList ({ count = '', page = '', order = '' }, cb) {
    request.get({
      url: 'https://api.coinhive.com/user/list',
      qs: { secret, count, order }
    }, cb)
  }

  // user reset
  // https://coinhive.com/documentation/http-api#user-reset
  function userReset ({ name = '' }, cb) {
    request.post({
      url: 'https://api.coinhive.com/user/reset',
      form: { secret, name }
    }, cb)
  }

  // user reset all
  // https://coinhive.com/documentation/http-api#user-reset-all
  function userResetAll (cb = '') {
    request.post({
      url: 'https://api.coinhive.com/user/reset-all',
      form: { secret }
    }, cb)
  }

  // link create
  // https://coinhive.com/documentation/http-api#link-create
  function linkCreate ({ url = '', hashes = '' }, cb) {
    request.post({
      url: 'https://api.coinhive.com/link/create',
      form: { secret, url, hashes }
    }, cb)
  }

  // stats payout
  // https://coinhive.com/documentation/http-api#stats-payout
  function statsPayout (cb) {
    request.get({
      url: 'https://api.coinhive.com/stats/payout',
      qs: { secret }
    }, cb)
  }

  // stats site
  // https://coinhive.com/documentation/http-api#stats-site
  function statsSite (cb) {
    request.get({
      url: 'https://api.coinhive.com/stats/site',
      qs: { secret }
    }, cb)
  }

  // stats history
  // https://coinhive.com/documentation/http-api#stats-history
  function statsHistory ({ begin = '', end = '' }, cb) {
    request.get({
      url: 'https://api.coinhive.com/stats/history',
      qs: { secret, begin, end }
    }, cb)
  }

  return {
    verify,
    userBalance,
    userWithdraw,
    userTop,
    userList,
    userReset,
    userResetAll,
    linkCreate,
    statsPayout,
    statsSite,
    statsHistory
  }
}
