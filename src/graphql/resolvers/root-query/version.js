const version = () => {
  const x = require('../../../../package.json').version
  console.log(x)
  
  return x
}

module.exports = { version }
