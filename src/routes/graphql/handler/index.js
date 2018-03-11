const { graphqlRestify } = require('graphql-server-restify')
const options = require('./options')

module.exports = [
  graphqlRestify(options)
]