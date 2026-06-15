import { TokenDecoded, verifyToken } from "../User/resolvers";
import { QueryResolvers, MutationResolvers } from "./../generated/graphql";
import { GetCommentsUseCase } from "./application/get-comments-use-case";
import { GetCommentsByTweetIdUseCase } from "./application/get-comments-by-tweet-id-use-case";
import { NewCommentUseCase } from "./application/new-comment-use-case";
import { DeleteCommentUseCase } from "./application/delete-comment-use-case";
import { LikeCommentUseCase } from "./application/like-comment-use-case";
import { DeslikeCommentUseCase } from "./application/deslike-comment-use-case";
import CommentFirebaseRepository from "./infrastructure/firebase.repository";
import UserFirebaseRepository from "../User/infrastructure/firebase.repository";
import TweetFirebaseRepository from "../Tweet/infrastructure/firebase.repository";

const getCommentsUseCase = new GetCommentsUseCase(CommentFirebaseRepository);
const getCommentsByTweetIdUseCase = new GetCommentsByTweetIdUseCase(CommentFirebaseRepository);
const newCommentUseCase = new NewCommentUseCase(CommentFirebaseRepository);
const deleteCommentUseCase = new DeleteCommentUseCase(CommentFirebaseRepository);
const likeCommentUseCase = new LikeCommentUseCase(CommentFirebaseRepository);
const deslikeCommentUseCase = new DeslikeCommentUseCase(CommentFirebaseRepository);

export const commentsQueries: QueryResolvers = {
  getComments: async () => {
    return await getCommentsUseCase.execute();
  },
  getCommentsByTweetId: async (_, { _id }) => {
    return await getCommentsByTweetIdUseCase.execute(_id);
  },
};

export const commentsMutations: MutationResolvers = {
  likeComment: async (_, { _id, token }) => {
    try {
      const decoded = await verifyToken(token as string);
      return await likeCommentUseCase.execute(_id as string, (<TokenDecoded>decoded)._id as string);
    } catch (err: any) {
      throw Error(err);
    }
  },
  deslikeComment: async (_, { _id, token }) => {
    try {
      const decoded = await verifyToken(token as string);
      return await deslikeCommentUseCase.execute(_id as string, (<TokenDecoded>decoded)._id as string);
    } catch (err: any) {
      throw Error(err);
    }
  },
  deleteComment: async (_, { _id, token }) => {
    try {
      await verifyToken(token as string);
      await deleteCommentUseCase.execute(_id as string);
      return true;
    } catch (err: any) {
      throw Error(err);
    }
  },
  newComment: async (_, { content, originalTweet, token }) => {
    try {
      const decoded = await verifyToken(token as string);
      await TweetFirebaseRepository.getTweetById(originalTweet as string);
      const { userName, name, color } = await UserFirebaseRepository.getUserById(
        (<TokenDecoded>decoded)._id as string,
      );
      return await newCommentUseCase.execute({
        authorId: (<TokenDecoded>decoded)._id as string,
        content: content as string,
        originalTweet: originalTweet as string,
        name,
        userName,
        avatarColor: color,
      });
    } catch (err: any) {
      throw Error(err);
    }
  },
};
