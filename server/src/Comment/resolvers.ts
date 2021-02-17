import { TokenDecoded, verifyToken } from "../User/resolvers";
import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const commentsQueries: QueryResolvers = {
  getComments: async (_, __, context) => {
    const all = await context.dataSources.Comment.find({
      originalTweet: "602d54dea432f17fcef1c289",
    });
    console.log("all", all.length);
    const comments = await context.dataSources.Comment.find();
    return comments;
  },
};
export const commentsMutations: MutationResolvers = {
  deleteComment: async (_, { _id, token }, context) => {
    try {
      await verifyToken(token as string);
      await context.dataSources.Comment.deleteOne({ _id });
      return true;
    } catch (err) {
      throw Error(err);
    }
  },
  newComment: async (_, { content, originalTweet, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const tweet = await context.dataSources.Tweet.findOne({
        _id: originalTweet,
      });
      if (!tweet) return Error("Tweet não existe");
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
