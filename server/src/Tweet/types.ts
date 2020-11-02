import { gql } from "apollo-server";

export const types = gql`
  type likedBy {
    _id: ID
  }

  type Tweet {
    _id: ID
    authorId: String
    createdAt: String
    content: String
    likedBy: [likedBy]
  }

  extend type Query {
    getTweets: [Tweet]
  }
`;
