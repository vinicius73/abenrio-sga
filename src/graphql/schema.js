const { makeExecutableSchema, addErrorLoggingToSchema } = require('graphql-tools')

const typeDefs = require('./type-defs')
const resolvers = require('./resolvers')
// const logger = require('./logger')

const schema = makeExecutableSchema({ typeDefs, resolvers })

// addErrorLoggingToSchema(schema, logger)

module.exports = schema
