# coinhive-api.js
node wrapper for Coinhive HTTP API


## Simple to use

coinhive-api.js is a wrapper for the Coinhive HTTP API, its really simple and it comes in two flavours, traditional with callback and a promise api

```js
const { CoinhiveApi, CoinhivePromiseApi } = require('coinhive-api')
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')

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

[/token/verify](https://coinhive.com/documentation/http-api#token-verify)
Verify that a token from a CoinHive.Token miner has reached a number of hashes. Tokens are only valid for 1 hour. Note that a token can only be verified once. All subsequent requests to verify the same token will result in the invalid_token error.

#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```

---


## User: balance


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## User: withdraw


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## User: top users


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## User: list users


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## User: reset user


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## User: reset all users


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## Link: create


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## Stats: payout


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## Stats: site


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---


## Stats: history


#### Usage

```js
const coinhive = CoinhiveApi('YOUR COINHIVE KEY HERE')
```

#### Usage with promise

```js
const coinhivePromise = CoinhivePromiseApi('YOUR COINHIVE KEY HERE')
```



---
