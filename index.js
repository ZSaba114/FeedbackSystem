const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./src/config');

// importer les schémas graphql et les resolvers
const typeDefs = require('./src/schemas/typeDefs');
const resolvers = require('./src/resolvers/resolvers');

const startServer = async () => {
  const app = express();

  
  await connectDB();

  // creation du serveur Apollo
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`🚀 Serveur prêt sur http://localhost:${PORT}${server.graphqlPath}`)
  );
};

startServer();
