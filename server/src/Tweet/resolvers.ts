import { verifyToken, TokenDecoded } from "../User/resolvers";
import {
  QueryResolvers,
  MutationResolvers,
  Tweet,
} from "./../generated/graphql";

export const query: QueryResolvers = {
  getTweets: async (_, args, context) => {
    const tweets = await context.dataSources.Tweet.find()
      .sort({ createdAt: -1 })
      .exec();

    for await (const [index, tweet] of tweets.entries()) {
      const { color } = await context.dataSources.User.findOne({
        _id: tweet.authorId,
      });
      tweets[index].color = color;
    }
    return tweets;
  },
};

export const mutation: MutationResolvers = {
  like: async (_, { _id, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const findTweet = await context.dataSources.Tweet.findOne({ _id });
      if (!findTweet) Error("Tweet não existe");
      const likes = new Set(findTweet.likedBy);
      likes.add((<TokenDecoded>decoded)._id);
      findTweet.likedBy = [...likes];
      await context.dataSources.Tweet.findOneAndUpdate({ _id }, findTweet);
      const tweet = await context.dataSources.Tweet.findOne({ _id });
      const { color } = await context.dataSources.User.findOne({
        _id: findTweet.authorId,
      });
      tweet["color"] = color;
      return tweet;
    } catch (err) {
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
      const tweet = await context.dataSources.Tweet.findOne({ _id });
      const { color } = await context.dataSources.User.findOne({
        _id: findTweet.authorId,
      });
      tweet["color"] = color;
      return tweet;
    } catch (err) {
      throw Error(err);
    }
  },
  getTweetByUserID: async (_, { _id }, context) => {
    const tweets = await context.dataSources.Tweet.find({ authorId: _id })
      .sort({ createdAt: -1 })
      .exec();

    const { color } = await context.dataSources.User.findOne({
      _id,
    });

    const withColors = tweets.map((tweet: Tweet) => ({
      ...tweet,
      color,
    }));

    return withColors;
  },
  getMyFriendsTweets: async (_, { _id }, context) => {
    return await context.dataSources.Tweet.find({ authorId: { $ne: _id } });
  },
  newTweet: async (_, { content, token }, context) => {
    try {
      const decoded = await verifyToken(token as string);
      const { userName, name } = await context.dataSources.User.findOne({
        _id: (<TokenDecoded>decoded)._id,
      });
      return await new context.dataSources.Tweet({
        authorId: (<TokenDecoded>decoded)._id,
        createdAt: new Date().toISOString(),
        content,
        userName,
        name,
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
