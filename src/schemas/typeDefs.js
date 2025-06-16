const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String
  }

  type Product {
    id: ID!
    name: String!
    description: String
    version: String
    createdAt: String
  }

 type Feedback {
  id: ID!
  username: String!
  productName: String!
  rating: Int!
  comment: String
  createdAt: String
  user: User           
  product: Product     
}



  # Queries 
  type Query {
    users: [User!]!
    products: [Product!]!
    feedbacks: [Feedback!]!
    feedbacksByProduct(productId: ID!): [Feedback!]!
  }

  # Mutations 
  type Mutation {
  createUser(username: String!, email: String!): User!
  createProduct(name: String!, description: String, version: String): Product!
  createFeedback(username: String!, productName: String!, rating: Int!, comment: String): Feedback!
}


`;

module.exports = typeDefs;
