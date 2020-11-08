import jwt from "jsonwebtoken";
import { secret } from "../User/resolvers";

import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    return await context.dataSources.Tweet.find();
  },
};

export const mutation: MutationResolvers = {
  like: async (_, { _id, token }, context) => {
    try {
      const decoded = jwt.verify(token || "", secret);
      const tweet = await context.dataSources.Tweet.findOne({ _id });
      const likes = new Set(tweet.likedBy);
      likes.add(decoded?._id);
      console.log(likes);
      tweet.likedBy = [...likes];
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, tweet);
      return await context.dataSources.Tweet.findOne({ _id });
    } catch (err) {
      throw Error("Usuário inválido");
    }
  },
  deslike: async (_, { _id, token }, context) => {
    try {
      const decoded = jwt.verify(token || "", secret);
      const tweet = await context.dataSources.Tweet.findOne({ _id });
      const newLikedBy = tweet.likedBy.filter(
        (id: string) => id !== decoded?._id
      );
      tweet.likedBy = newLikedBy;
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, tweet);
      return await context.dataSources.Tweet.findOne({ _id });
    } catch (err) {
      throw Error("Usuário inválido");
    }
  },
  getTweetByUserID: async (_, { _id }, context) => {
    return await context.dataSources.Tweet.find({ authorId: _id });
  },
  newTweet: async (_, { content, token }, context) => {
    try {
      const decoded = jwt.verify(token || "", secret);
      await context.dataSources.User.findOne({ _id: decoded?._id });
      return await new context.dataSources.Tweet({
        authorId: decoded?._id,
        createdAt: new Date(),
        content,
      }).save();
    } catch (err) {
      throw Error("Usuário inválido");
    }
  },
};
