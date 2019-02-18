// /App/server.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

const schema = require('./src/Schema/schema')

// TODO: Modularize these Components -> /App/Config && src/routes


// #############################
// ######    App Config   ######
// #############################

// Server URL
const DBURL = 'mongodb://mongodb:27017/admin'

// Initial Mongo Connection
mongoose.connect(DBURL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Initializing Connection to MongoDB...")
  })
  .catch(err => {
    console.error(`Server Error: ${err}`)
    process.exit(1)
  });

const db = mongoose.connection

// On Connection...
db.once('open', (err) => {
  console.log('Now Connected to MongoDB');
})


// #############################
// #####    App Logic      #####
// #############################

// Instatiate App
const app = express();

// CORS for Cross origin (server <-> client)
app.use(cors())

// Initial route ... Initial API route to point you to /graphql
app.get('/', (req, res) => {
  res.send('Go to /graphql');
})

// GraphiQL up while in development
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

// Listen on port 4000 for requests
app.listen(4000, () => {
  console.log("Now listening for requests on port 4000")
})