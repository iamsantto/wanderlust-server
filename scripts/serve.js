import dotenv from 'dotenv'
import http from 'http'
import open from 'open'

import app from '../src/app'

if (process.env.NODE_ENV !== 'production') dotenv.config()

const isDevelop = process.env.NODE_ENV === 'development',
  PORT = process.env.PORT,
  ASSET_HOST = process.env.ASSET_HOST

app.set('port', PORT)

const server = http.createServer(app)
server.listen(PORT, err => {
  if (err)
    console.log(err)

  if (isDevelop) {
    console.log('Server running on port: ', PORT)
    open('http://localhost:' + PORT)
  } else
    console.log('App is deployed to: ', ASSET_HOST)
})
