const requireContext = require('require-context')
const { compose } = require('ramda')

const getContext = dirName => requireContext(dirName, true, /\.js$/)

const mergeResolvers = ctx => ctx.keys()
  .reduce((acc, key) => {
    return {
      ...acc,
      ...ctx(key)
    }
  }, {})

const loadResolversFolder = compose(mergeResolvers, getContext)

module.exports = loadResolversFolder