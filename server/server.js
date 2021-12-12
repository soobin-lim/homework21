const express = require('express');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

// Import the ApolloServer class 
const { ApolloServer } = require('apollo-server-express');
// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Update Express.js to use Apollo server features
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on 127.0.0.1:${PORT}`));
});
