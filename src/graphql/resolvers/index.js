const { join } = require('path')
const { loadResolversFolder } = require('../utils')

const makeDirName = dirName => join(__dirname, dirName)

const RootQuery = loadResolversFolder(makeDirName('root-query'))

module.exports = { RootQuery }