import jwt from "jsonwebtoken";
import { secret } from "../User/resolvers";

import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    return await context.dataSources.Tweet.find();
  },
};

export const mutation: MutationResolvers = {
  getTweetByUserID: async (_, { _id }, context) => {
    return await context.dataSources.Tweet.find({ authorId: _id });
  },
  newTweet: async (_, { content, token }, context) => {
    try {
      const decoded = jwt.verify(token || "", secret);
      await context.dataSources.User.findOne({ _id: decoded });
      return await new context.dataSources.Tweet({
        authorId: decoded,
        createdAt: new Date(),
        content,
      }).save();
    } catch (err) {
      throw Error("Usuário inválido");
    }
  },
};
