const routeHandler = require('./handler')
const { graphiqlRestify } = require('graphql-server-restify')

module.exports = [{
  path: '/graphql',
  method: ['get', 'post'],
  handler: routeHandler,
  asPromise: false,
  // needAuth: true
}, {
  path: 'graphiql',
  method: 'get',
  asPromise: false,
  // needAuth: false,
  handler: graphiqlRestify({ endpointURL: '/graphql' })
}]
