import { TokenDecoded, verifyToken } from "../User/resolvers";
import { QueryResolvers, MutationResolvers } from "./../generated/graphql";

export const commentsQueries: QueryResolvers = {
  getComments: async (_, __, context) => {
    return await context.dataSources.Comment.find();
  },
  getCommentsByTweetId: async (_, { _id }, context) => {
    return await context.dataSources.Comment.find({ originalTweet: _id });
  },
};
export const commentsMutations: MutationResolvers = {
  likeComment: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const comment = await context.dataSources.Comment.findOne({ _id });
      if (!comment) Error("Comentário não existe");
      const likes = new Set(comment.likedBy);
      likes.add((<TokenDecoded>decoded)._id);
      comment.likedBy = [...likes];
      await context.dataSources.Comment.findOneAndUpdate({ _id }, comment);
      return await context.dataSources.Comment.findOne({ _id });
    } catch (err: any) {
      throw Error(err);
    }
  },
  deslikeComment: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const comment = await context.dataSources.Comment.findOne({ _id });
      if (!comment) Error("Comentário não existe");
      const newLikedBy = comment.likedBy.filter(
        (id: string) => id !== (<TokenDecoded>decoded)._id
      );
      comment.likedBy = newLikedBy;
      await context.dataSources.Comment.findOneAndUpdate({ _id }, comment);
      return await context.dataSources.Comment.findOne({ _id });
    } catch (err: any) {
      throw Error(err);
    }
  },
  deleteComment: async (_, { _id, token }, context) => {
    try {
      await verifyToken(token as string);
      await context.dataSources.Comment.deleteOne({ _id });
      return true;
    } catch (err: any) {
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
    } catch (err: any) {
      throw Error(err);
    }
  },
};
