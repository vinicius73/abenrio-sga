const serverFactory = require('./server/factory')


serverFactory()
  .catch(e => {
    console.error(e)
    process.exit()
  })


process.on('SIGINT', function () {
  console.warn('Stoping...')
  process.exit(0)
});