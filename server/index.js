const express = require("express");
require("dotenv").config()
const color = require('colors');
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))


app.listen(PORT, () => {
    console.log("Server started on PORT ",PORT);
})