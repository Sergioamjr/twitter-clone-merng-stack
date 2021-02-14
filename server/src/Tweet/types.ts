import { gql } from "apollo-server";

export const types = gql`
  type Tweet {
    _id: ID
    color: String
    authorId: String
    name: String
    userName: String
    createdAt: String
    avatarColor: String
    content: String
    likedBy: [String]
  }

  extend type Query {
    getTweets: [Tweet]
    getTweetById(_id: String!): Tweet
  }

  extend type Mutation {
    getMyFriendsTweets(_id: String!): [Tweet]
    getTweetByUserID(_id: String!): [Tweet]
    newTweet(content: String, token: String!): Tweet
    deleteTweet(_id: String, token: String): Boolean
    like(_id: String, token: String): Tweet
    deslike(_id: String, token: String): Tweet
  }
`;
