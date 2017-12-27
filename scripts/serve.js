import http from 'http'
import open from 'open'

import app from '../src/app'

const isProduction = (JSON.stringify(process.env.NODE_ENV) === 'production'),
  PORT = parseInt(process.env.PORT) || 8080,
  ASSET_HOST = JSON.stringify(process.env.ASSET_HOST)

app.set('port', PORT)

const server = http.createServer(app)
server.listen(PORT, err => {
  if (err)
    console.log(err)

  if (isProduction)
    console.log('App is deployed to: ', ASSET_HOST)
  else {
    console.log('Server running on port: ', PORT)
    open('http://localhost:' + PORT)
  }
})
