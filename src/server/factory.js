const restify = require('restify')
const registerRoutesByPath = require('./register-routes-by-path')
const path = require('path')

const defaltRoutesDir = path.join(__dirname, '../routes')

const factory = (port, options = {}) => {
  const server = restify.createServer()

  registerRoutesByPath(server, options.routes || defaltRoutesDir)

  return new Promise(resolve => {
    server.listen(port || process.env.PORT || 8080, () => {
      console.log('%s listening at %s', server.name, server.url)
      resolve({ server })
    })
  })
}

module.exports = factory