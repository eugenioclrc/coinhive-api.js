# coinhive-lib.js
node wrapper for Coinhive HTTP API

[![NPM](https://nodei.co/npm/coinhive-lib.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/coinhive-lib/)

[github repo link](https://github.com/eugenioclrc/coinhive-api.js)


Install:

```bash
npm i coinhive-lib
```


## Simple to use

coinhive-lib.js is a wrapper for the Coinhive HTTP API, its really simple and it comes in two flavours, traditional with callback and a promise api

```js
const { CoinhiveLib, CoinhivePromiseLib } = require('coinhive-lib')
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhivePromise.statsSite()
  .then(body => console.log(body))
  .catch(error => console.error(error));

coinhive.statsSite((error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
}
```

---

Like it? **buy me a beer!**

BTC: 1M8sQivGiMx2f3R6rP3raTq5PDbnTHeC5n

XMR: 4A76foXYghp1WBDjLjA4EDPwsvAisHRQY3tq8cUkBuducW6WkyhcU2EX5qiSxFdLQFLVaeeZcUhJULjwyBYeJFRdKVh2BxM



## Methods

- [Token verify](#token-verify)
- [User: balance](#user-balance)
- [User: withdraw](#user-withdraw)
- [User: top users](#user-top-users)
- [User: list users](#user-list-users)
- [User: reset user](#user-reset-user)
- [User: reset all users](#user-reset-all-users)
- [Link: create](#link-create)
- [Stats: payout](#stats-payout)
- [Stats: site](#stats-site)
- [Stats: history](#stats-history)


---


## Token verify

**Coinhive endpoint:** [/token/verify](https://coinhive.com/documentation/http-api#token-verify)

Verify that a token from a CoinHive.Token miner has reached a number of hashes. Tokens are only valid for 1 hour. Note that a token can only be verified once. All subsequent requests to verify the same token will result in the invalid_token error.

#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.verify({ token: 'yourtoken', hashes: 'yourhash' }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.verify({ token: 'yourtoken', hashes: 'yourhash' })
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```

---


## User: balance

**Coinhive endpoint:** [/user/balance](https://coinhive.com/documentation/http-api#user-balance)

Get the total number of hashes, the withdrawn hashes and the current balance for a user name. Think of it as the balance of a bank account. Hashes can be paid in through mining, and withdrawn through /user/withdraw.


#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.userBalance({ name: 'username' }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.userBalance({ name: 'username' })
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## User: withdraw

**Coinhive endpoint:** [/user/withdraw](https://coinhive.com/documentation/http-api#user-withdraw)

Withdraw a number of hashes for a user name. If successful, the requested amount will be subtracted from the user's balance.


#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.userWithdraw({ name: 'username', amount: 'amount' }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.userWithdraw({ name: 'username', amount: 'amount' })
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## User: top users

**Coinhive endpoint:** [/user/top](https://coinhive.com/documentation/http-api#user-top)

Get a list of top users ordered by total number of hashes, balance or hashes withdrawn.


#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.userTop((error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.userTop()
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## User: list users

**Coinhive endpoint:** [/user/list](https://coinhive.com/documentation/http-api#user-list)


Get a paginated list of all users in alphabetical order. Note that this will only return users with a total number of hashes greater than 0.



#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.userList({ count: 'count', page: 'npage', order: 'sortType' }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.userList({ count: 'count', page: 'npage', order: 'sortType' })
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## User: reset user

**Coinhive endpoint:** [/user/reset](https://coinhive.com/documentation/http-api#user-reset)


Reset a user's total hashes and withdrawn amount to 0.



#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.userReset({ name: 'username'}, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.userReset({ name: 'username'} )
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## User: reset all users

**Coinhive endpoint:** [/user/reset-all](https://coinhive.com/documentation/http-api#user-reset-all)


Reset the hashes and withdrawn amount for all users for this site to 0.



#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.resetAll((error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.resetAll()
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## Link: create

**Coinhive endpoint:** [/link/create](https://coinhive.com/documentation/http-api#link-create)


Create a new shortlink. You can also do this by hand, directly from your dashboard.




#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.linkCreate({ url: 'https://www.google.com', hashes: '10' }, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.linkCreate({ url: 'https://www.google.com', hashes: '10' } )
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## Stats: payout

**Coinhive endpoint:** [/stats/payout](https://coinhive.com/documentation/http-api#stats-payout)


Get the current payout rate and stats about the network.



#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.statsPayout((error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.statsPayout()
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```



---


## Stats: site

**Coinhive endpoint:** [/stats/site](https://coinhive.com/documentation/http-api#stats-site)


Get the current hashrate, total hashes, paid & pending xmr, and the hourly history for the past seven days for the site.




#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.statsSite((error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.statsSite()
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---


## Stats: history

**Coinhive endpoint:** [/stats/history](https://coinhive.com/documentation/http-api#stats-history)


Get the hourly history of total hashes and hashes/s for a time period for the site.



#### Usage

```js
const coinhive = CoinhiveLib('YOUR COINHIVE KEY HERE')

coinhive.statsHistory({ begin: 'unixtimstampbegin', end: 'unixtimestampend'},(error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(body)
  }
})
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseLib('YOUR COINHIVE KEY HERE')
coinhivePromise.statsHistory({ begin: 'unixtimstampbegin', end: 'unixtimestampend'})
  .then(body => console.log(body))
  .catch(error => console.error(error))
})
```


---
