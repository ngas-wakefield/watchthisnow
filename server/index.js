
const path = require('path')
const PORT = process.env.PORT || 3000
const dotenv = require('dotenv')

// server/index.js
const envPath = path.join(__dirname, '.env')


dotenv.config({ path: envPath })


if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.config({ path: envPath })
  if(envConfig.error) throw envConfig.error
}



const server = require('./server')

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)

})
