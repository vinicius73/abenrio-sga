const { loadGraphQLFiles } = require('../utils')

const files = loadGraphQLFiles(__dirname)

module.exports = [
  ...files,
]
