import { TokenDecoded, verifyToken } from "../User/resolvers";
import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const commentsQueries: QueryResolvers = {
  getComments: async (_, __, context) => {
    return await context.dataSources.Comment.find();
  },
};
export const commentsMutations: MutationResolvers = {
  newComment: async (_, { content, originalTweet, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const { userName, name, color } = await context.dataSources.User.findOne({
        _id: (<TokenDecoded>decoded)._id,
      });

      return await new context.dataSources.Comment({
        authorId: (<TokenDecoded>decoded)._id,
        createdAt: new Date().toISOString(),
        content,
        avatarColor: color,
        userName,
        name,
        originalTweet,
      }).save();
    } catch (err) {
      throw Error(err);
    }
  },
};
