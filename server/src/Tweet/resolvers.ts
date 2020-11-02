import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    return await context.dataSources.Tweet.find();
  },
};

export const mutation: MutationResolvers = {
  newTweet: async (_, { content }, context) => {
    const mockedTweet = {
      authorId: "id",
      createdAt: new Date(),
      content,
    };
    return await new context.dataSources.Tweet(mockedTweet).save();
  },
};
