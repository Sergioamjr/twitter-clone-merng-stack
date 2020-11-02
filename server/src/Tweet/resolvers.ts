import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    return await context.dataSources.Tweet.find();
  },
};

export const mutation: MutationResolvers = {};
