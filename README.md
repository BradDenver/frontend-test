## My Implementation
![Travis CI](https://travis-ci.org/BradDenver/frontend-test.svg?branch=master)
I have completed 4 different implementations of the Counters App in React:
* [Basic React](https://github.com/BradDenver/frontend-test) a basic non flux implementation. See [this commit](https://github.com/BradDenver/frontend-test/tree/dd606386bd0ff326aa965fc0c4204904a73f8672) for a version that does not hit the server api
* [Flux Basic](https://github.com/BradDenver/frontend-test/tree/flux-basic) a basic "vanilla" flux implementation
* [Flux Dispy](https://github.com/BradDenver/frontend-test/tree/flux-dispy) a flux implementation using the Dispy package
* [Flux Flummox](https://github.com/BradDenver/frontend-test/tree/flux-flummox) a flux implementation using the Flummox package that I had been meaning to try for a while

In each branch:
* `npm run build` starts a webpack dev server on localhost:3000 with hot module reloading
* `npm build` builds the app to `/static/` (although a built version has been commited)
* `npm start` runs the server at localhost:3000

Tests are only included in the master branch and have limited coverage (but at least Travis CI confirms they run).

# SITEPOINT FRONTEND TEST

You need to create a simple counter application that can do the following:
* Add a named counter to a list of counters
* Increment any of the counters
* Decrement any of the counters
* Delete a counter
* Show a sum of all the counter values
* It must persist data back to the server

We have provided:
* Compiled Directory: of `/static/`
* `/static/index.html` that will be served at `localhost:3000` when the server is running
* `/static/app.js` and `/static/app.css` will be used automatically by `/static/index.html`

> If you need other publicly available files, other than `index.html`, `app.js`, `app.css` you will have to modify the server code in `/index.js`

Some other notes:
* The design, layout, ux, is all up to you.
* You can change anything you want (server stuff included) as long as the above list is completed.
* This isn't a backend test, don't make it require any databases.
* If you decide to use a precompiler of any kind (js/css/etc..) we need to be able to run it with `npm run build`.
* We don't want to run any `npm install -g whatever` commands. **NO GLOBAL DEPENDENCIES**
* Tests are good.

A possible layout could be:
```
         Counter App
+-----------------------------+
| Input                   [+] |
+-----------------------------+
+-----------------------------+
| [x] Bob           [-] 5 [+] |
| [x] Steve         [-] 1 [+] |
| [x] Pat           [-] 4 [+] |
+-----------------------------+
+-----------------------------+
| Total                    10 |
+-----------------------------+
```

## Install and start the server

```
$ npm install
$ npm start
$ npm run build #[optional] use for any precompilers you choose
```

## API endpoints / examples

> The following endpoints are expecting a `Content-Type: application/json`

```
GET /api/v1/counters
# []

POST {title: "bob"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0}
# ]

POST {title: "steve"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "asdf"} /api/v1/counter/inc
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "qwer"} /api/v1/counter/dec
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: -1}
# ]

DELETE {id: "qwer"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 1}
# ]

GET /api/v1/counters
# [
#   {id: "asdf", title: "bob", count: 1},
# ]
```

> **NOTE:* Each request returns the current state of all counters.
