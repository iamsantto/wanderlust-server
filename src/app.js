import bodyParser from 'body-parser'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import logger from 'morgan'

const app = express()

const isDevelop = process.env.NODE_ENV === 'development'

if (isDevelop)
  app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/graphql', graphqlHTTP({
  graphiql: isDevelop
}))

app.get('/', (req, res) => res.sendStatus(200))

module.exports = app
