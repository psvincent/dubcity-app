const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    avatar: String
    role: [String]
    games: [String]
  }

  type Event {
    _id: ID!
    title: String
    description: String
    game: [String]
    attendees: [String]
    startDate: String
    endDate: String
    image: String
    link: String
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input updateUser {
    username: String
    email: String
    avatar: String
    role: [String]
    games: [String]
  }

  type Query {
    me: User
    getEvents: [Event]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, avatar: String, role: [String], games: [String]): Auth
    updateUser(userInfo: updateUser): User
    removeUser: User
    createEvent(title: String!, description: String!, game: [String], attendees: [String], startDate: String!, endDate: String, image: String, link: String ): Event
  }
`;

module.exports = typeDefs;
