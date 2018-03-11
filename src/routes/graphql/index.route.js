const routeHandler = require('./handler')


module.exports = [{
  path: '/graphql',
  method: ['get', 'post'],
  handler: routeHandler,
  asPromise: false,
  // needAuth: true
}]
