// /App/server.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

// Instantiate App
const app = express();

// GraphQL Schema
const schema = require('./src/Schema/schema')

// Server Config
const DBURL = 'mongodb://mongodb:27017/admin'

// Initial Mongo Connection
mongoose.connect(DBURL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to Local Database")
  })
  .catch(err => {
    console.error(`Server Error: ${err}`)
    process.exit(1)
  });

// const db = mongoose.connection

// On Connection...
// db.once('open', (err) => {
  // console.log('Connected on ONCE.');
// })

// CORS for Cross origin (server <-> client)
app.use(cors())

app.get('/', (req, res) => {
  res.send('Go to /graphql');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000")
})