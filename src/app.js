import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

const app = express()

if (JSON.stringify(process.env.NODE_ENV) === 'development')
  app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res) => res.sendStatus(200))

module.exports = app
