export {};
const { gql } = require("apollo-server");

const types = gql`
  type User {
    _id: ID
    name: String
    userName: String
    email: String
    friends: [String]
  }

  type LoggedUser {
    _id: ID
    name: String
    userName: String
    email: String
    token: String
    friends: [String]
  }

  type UserAndTweets {
    user: User
    tweets: [Tweet]
  }

  extend type Query {
    getUsers: [User]
    getUserById(_id: String!): UserAndTweets
    validateToken(token: String!): Boolean
  }

  extend type Mutation {
    addToFriends(_id: String!, newFriendId: String!, token: String!): LoggedUser
    removeFromFriends(
      _id: String!
      friendId: String!
      token: String!
    ): LoggedUser
    login(email: String, password: String): LoggedUser
    saveUser(
      userName: String!
      name: String!
      email: String!
      password: String!
    ): LoggedUser
  }
`;

module.exports = { types };
