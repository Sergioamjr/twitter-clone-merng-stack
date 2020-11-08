import { gql } from "apollo-server";

export const types = gql`
  type Tweet {
    _id: ID
    authorId: String
    createdAt: String
    content: String
    likedBy: [String]
  }

  extend type Query {
    getTweets: [Tweet]
  }

  extend type Mutation {
    getTweetByUserID(_id: String!): [Tweet]
    newTweet(content: String, token: String!): Tweet
  }
`;
