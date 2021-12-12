const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    password: String
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    user: User
    classes: [Class]
  }
`;

module.exports = typeDefs;
