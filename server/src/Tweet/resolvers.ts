import { PubSub } from "apollo-server";
import { verifyToken, TokenDecoded } from "../User/resolvers";
import {
  QueryResolvers,
  MutationResolvers,
  SubscriptionResolvers,
} from "./../generated/graphql";
import { GetTweetsUseCase } from "./application/get-tweets-use-case";
import { GetTweetByIdUseCase } from "./application/get-tweet-by-id-use-case";
import { GetTweetsByUserIdUseCase } from "./application/get-tweets-by-user-id-use-case";
import { GetFriendsTweetsUseCase } from "./application/get-friends-tweets-use-case";
import { NewTweetUseCase } from "./application/new-tweet-use-case";
import { DeleteTweetUseCase } from "./application/delete-tweet-use-case";
import { LikeTweetUseCase } from "./application/like-tweet-use-case";
import { DeslikeTweetUseCase } from "./application/deslike-tweet-use-case";
import TweetFirebaseRepository from "./infrastructure/firebase.repository";
import UserFirebaseRepository from "../User/infrastructure/firebase.repository";
import CommentFirebaseRepository from "../Comment/infrastructure/firebase.repository";

const pubsub = new PubSub();

const getTweetsUseCase = new GetTweetsUseCase(TweetFirebaseRepository);
const getTweetByIdUseCase = new GetTweetByIdUseCase(TweetFirebaseRepository);
const getTweetsByUserIdUseCase = new GetTweetsByUserIdUseCase(TweetFirebaseRepository);
const getFriendsTweetsUseCase = new GetFriendsTweetsUseCase(TweetFirebaseRepository);
const newTweetUseCase = new NewTweetUseCase(TweetFirebaseRepository);
const deleteTweetUseCase = new DeleteTweetUseCase(TweetFirebaseRepository);
const likeTweetUseCase = new LikeTweetUseCase(TweetFirebaseRepository);
const deslikeTweetUseCase = new DeslikeTweetUseCase(TweetFirebaseRepository);

export const tweetSubscriptions: SubscriptionResolvers = {
  hasANewTweet: {
    subscribe: () => pubsub.asyncIterator(["A_NEW_TWEET_HAS_BEEN_CREATED"]),
  },
};

export const tweetQueries: QueryResolvers = {
  getTweets: async () => {
    const tweets = await getTweetsUseCase.execute();

    for (const [index, tweet] of tweets.entries()) {
      const comments = await CommentFirebaseRepository.getCommentsByTweetId(tweet._id);
      tweets[index]["commentsCounter"] = comments.length;
    }

    return tweets;
  },
  getTweetById: async (_, { _id }) => {
    const tweet = await getTweetByIdUseCase.execute(_id);
    const comments = await CommentFirebaseRepository.getCommentsByTweetId(_id);
    return { ...tweet, commentsCounter: comments.length };
  },
};

export const tweetMutations: MutationResolvers = {
  like: async (_, { _id, token }) => {
    try {
      const decoded = await verifyToken(token as string);
      return await likeTweetUseCase.execute(_id as string, (<TokenDecoded>decoded)._id as string);
    } catch (err: any) {
      throw Error(err);
    }
  },
  deslike: async (_, { _id, token }) => {
    try {
      const decoded = await verifyToken(token as string);
      return await deslikeTweetUseCase.execute(_id as string, (<TokenDecoded>decoded)._id as string);
    } catch (err: any) {
      throw Error(err);
    }
  },
  getTweetByUserID: async (_, { _id }) => {
    return await getTweetsByUserIdUseCase.execute(_id);
  },
  getMyFriendsTweets: async (_, { _id }) => {
    return await getFriendsTweetsUseCase.execute(_id);
  },
  newTweet: async (_, { content, token }) => {
    try {
      const decoded = await verifyToken(token as string);
      const { userName, name, color } = await UserFirebaseRepository.getUserById(
        (<TokenDecoded>decoded)._id as string,
      );
      const tweet = await newTweetUseCase.execute({
        authorId: (<TokenDecoded>decoded)._id as string,
        content: content as string,
        name,
        userName,
        avatarColor: color,
      });
      pubsub.publish("A_NEW_TWEET_HAS_BEEN_CREATED", { hasANewTweet: tweet });
      return tweet;
    } catch (err: any) {
      throw Error(err);
    }
  },
  deleteTweet: async (_, { _id, token }) => {
    try {
      await verifyToken(token as string);
      await deleteTweetUseCase.execute(_id as string);
      await CommentFirebaseRepository.deleteCommentsByTweetId(_id as string);
      return true;
    } catch (err: any) {
      throw Error(err);
    }
  },
};
