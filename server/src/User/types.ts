import { gql } from "apollo-server";

export const types = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }
  type LoggedUser {
    _id: ID
    name: String
    email: String
    password: String
    token: String
  }
  extend type Query {
    getUsers: [User]
    getUserById(_id: String): User
  }
`;
