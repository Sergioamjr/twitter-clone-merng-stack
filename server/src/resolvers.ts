const { QueryResolvers, MutationResolvers } = require("./generated/graphql");
const {
  query: userQueries,
  mutation: userMutations,
} = require("./User/resolvers");
const {
  query: tweetQueries,
  mutation: tweetMutations,
} = require("./Tweet/resolvers");

const Query: typeof QueryResolvers = {
  ...userQueries,
  ...tweetQueries,
};

const Mutation: typeof MutationResolvers = {
  ...userMutations,
  ...tweetMutations,
};

module.exports = {
  Query, Mutation
};

export {};