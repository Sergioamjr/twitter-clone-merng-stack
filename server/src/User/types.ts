import { gql } from "apollo-server";

export const types = gql`
  type User {
    _id: ID
    color: String
    name: String
    userName: String
    email: String
    following: [String]
    followers: [String]
  }

  type LoggedUser {
    _id: ID
    color: String
    name: String
    userName: String
    email: String
    token: String
    following: [String]
    followers: [String]
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
    createRandomUser: LoggedUser
    follow(_id: String!, followingId: String!, token: String!): LoggedUser
    unfollow(_id: String!, unfollowingId: String!, token: String!): LoggedUser
    login(email: String, password: String): LoggedUser
    saveUser(
      userName: String!
      name: String!
      email: String!
      password: String!
    ): LoggedUser
  }
`;
