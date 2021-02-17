import { gql } from "apollo-server";

export const types = gql`
  type Comment {
    _id: ID
    authorId: String
    name: String
    userName: String
    createdAt: String
    avatarColor: String
    content: String
    likedBy: [String]
    originalTweet: String
  }

  extend type Query {
    getComments: [Comment]
  }

  extend type Mutation {
    newComment(content: String, token: String!, originalTweet: String!): Comment
    deleteComment(_id: String, token: String): Boolean
    likeComment(_id: String, token: String): Comment
    deslikeComment(_id: String, token: String): Comment
  }
`;
