const { gql } = require("apollo-server");
const { types: userTypes } = require("./User/types");
const { types: tweetTypes } = require("./Tweet/types");

const root = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [root, userTypes, tweetTypes];

export {};
