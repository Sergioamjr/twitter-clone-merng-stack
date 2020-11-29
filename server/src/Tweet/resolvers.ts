import { verifyToken, TokenDecoded } from "../User/resolvers";
import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    return await context.dataSources.Tweet.find();
  },
};

export const mutation: MutationResolvers = {
  like: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const tweet = await context.dataSources.Tweet.findOne({ _id });
      if (!tweet) Error("Tweet não existe");
      const likes = new Set(tweet.likedBy);
      likes.add((<TokenDecoded>decoded)._id);
      tweet.likedBy = [...likes];
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, tweet);
      return await context.dataSources.Tweet.findOne({ _id });
    } catch (err) {
      throw Error(err);
    }
  },
  deslike: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const tweet = await context.dataSources.Tweet.findOne({ _id });
      if (!tweet) Error("Tweet não existe");
      const newLikedBy = tweet.likedBy.filter(
        (id: string) => id !== (<TokenDecoded>decoded)._id
      );
      tweet.likedBy = newLikedBy;
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, tweet);
      return await context.dataSources.Tweet.findOne({ _id });
    } catch (err) {
      throw Error(err);
    }
  },
  getTweetByUserID: async (_, { _id }, context) => {
    return await context.dataSources.Tweet.find({ authorId: _id });
  },
  newTweet: async (_, { content, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      await context.dataSources.User.findOne({
        _id: (<TokenDecoded>decoded)._id,
      });
      return await new context.dataSources.Tweet({
        authorId: (<TokenDecoded>decoded)._id,
        createdAt: new Date(),
        content,
      }).save();
    } catch (err) {
      throw Error(err);
    }
  },
  deleteTweet: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      await context.dataSources.User.findOne({
        _id: (<TokenDecoded>decoded)._id,
      });
      await context.dataSources.Tweet.deleteOne({ _id });
      return true;
    } catch (err) {
      throw Error(err);
    }
  },
};
