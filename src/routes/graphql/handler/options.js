const { schema } = require('../../../graphql')

module.exports = req => {
  const context = {
  }

  return Promise.resolve({
    schema,
    context,
    debug: true
  })
}
