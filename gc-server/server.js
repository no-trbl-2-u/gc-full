// /App/server.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

// Instantiate App
const app = express();

// Environment Variables
// TODO: Set up ENV properly for Dev ++ Prod
// LOCAL
// const env = require('./.env')
// const { DBURL } = env

// PROD
const { DBURL } = process.env

// GraphQL Schema
const schema = require('./Schema/schema')

// Mongoose Connection
mongoose.connect(DBURL, { useNewUrlParser: true });
const db = mongoose.connection

// On Connection...
db.once('open', (err) => {
  console.log('connected to Database on mLab.');
})

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