(node:54886) UnhandledPromiseRejectionWarning: JsonWebTokenError: invalid token
    at Object.module.exports [as verify] (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/jsonwebtoken/verify.js:75:17)
    at file:///Users/macbook2012/Documents/aaa%20STRIVE%20SCHOOL/module%207/m8d2/M6-D4/src/auth/tools.js:33:9
    at new Promise (<anonymous>)
    at verifyJWT (file:///Users/macbook2012/Documents/aaa%20STRIVE%20SCHOOL/module%207/m8d2/M6-D4/src/auth/tools.js:32:3)
    at JWTAuthMiddleware (file:///Users/macbook2012/Documents/aaa%20STRIVE%20SCHOOL/module%207/m8d2/M6-D4/src/auth/basic.js:12:32)
    at Layer.handle [as handle_request] (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/layer.js:95:5)
    at /Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/index.js:174:3)
    at router (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/index.js:47:12)
    at Layer.handle [as handle_request] (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/layer.js:95:5)
    at trim_prefix (/Users/macbook2012/Documents/aaa STRIVE SCHOOL/module 7/m8d2/M6-D4/node_modules/express/lib/router/index.js:317:13)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:54886) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:54886) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
