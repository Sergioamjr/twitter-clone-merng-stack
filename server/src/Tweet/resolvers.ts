import { PubSub } from "apollo-server";
import { verifyToken, TokenDecoded } from "../User/resolvers";
import {
  QueryResolvers,
  MutationResolvers,
  SubscriptionResolvers,
} from "./../generated/graphql";

const pubsub = new PubSub();

export const tweetSubscriptions: SubscriptionResolvers = {
  hasANewTweet: {
    subscribe: () => pubsub.asyncIterator(["A_NEW_TWEET_HAS_BEEN_CREATED"]),
  },
};

export const tweetQueries: QueryResolvers = {
  getTweets: async (_, __, context) => {
    const tweets = await context.dataSources.Tweet.find()
      .sort({ createdAt: -1 })
      .exec();

    for (const [index, tweet] of tweets.entries()) {
      const comments = await context.dataSources.Comment.find({
        originalTweet: tweet._id,
      });
      tweets[index]["commentsCounter"] = comments.length;
    }

    return tweets;
  },
  getTweetById: async (_, { _id }, context) => {
    const tweet = await context.dataSources.Tweet.findOne({ _id });
    const comments = await context.dataSources.Comment.find({
      originalTweet: _id,
    });
    tweet["commentsCounter"] = comments.length;
    return tweet;
  },
};

export const tweetMutations: MutationResolvers = {
  like: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const findTweet = await context.dataSources.Tweet.findOne({ _id });
      if (!findTweet) Error("Tweet não existe");
      const likes = new Set(findTweet.likedBy);
      likes.add((<TokenDecoded>decoded)._id);
      findTweet.likedBy = [...likes];
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, findTweet);
      return await context.dataSources.Tweet.findOne({ _id });
    } catch (err: any) {
      throw Error(err);
    }
  },
  deslike: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const findTweet = await context.dataSources.Tweet.findOne({ _id });
      if (!findTweet) Error("Tweet não existe");
      const newLikedBy = findTweet.likedBy.filter(
        (id: string) => id !== (<TokenDecoded>decoded)._id
      );
      findTweet.likedBy = newLikedBy;
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, findTweet);
      return await context.dataSources.Tweet.findOne({ _id });
    } catch (err: any) {
      throw Error(err);
    }
  },
  getTweetByUserID: async (_, { _id }, context) => {
    return await context.dataSources.Tweet.find({ authorId: _id })
      .sort({ createdAt: -1 })
      .exec();
  },
  getMyFriendsTweets: async (_, { _id }, context) => {
    return await context.dataSources.Tweet.find({ authorId: { $ne: _id } });
  },
  newTweet: async (_, { content, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const { userName, name, color } = await context.dataSources.User.findOne({
        _id: (<TokenDecoded>decoded)._id,
      });
      const tweet = {
        authorId: (<TokenDecoded>decoded)._id,
        createdAt: new Date().toISOString(),
        content,
        avatarColor: color,
        userName,
        name,
      };
      pubsub.publish("A_NEW_TWEET_HAS_BEEN_CREATED", { hasANewTweet: tweet });
      return await new context.dataSources.Tweet(tweet).save();
    } catch (err: any) {
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
      await context.dataSources.Comment.deleteMany({ originalTweet: _id });
      return true;
    } catch (err: any) {
      throw Error(err);
    }
  },
};
