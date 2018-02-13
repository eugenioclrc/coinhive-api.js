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
