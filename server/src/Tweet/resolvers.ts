import jwt from "jsonwebtoken";
import { secret } from "../User/resolvers";

import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    return await context.dataSources.Tweet.find();
  },
};

export const mutation: MutationResolvers = {
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
