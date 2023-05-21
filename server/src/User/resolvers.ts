import { QueryResolvers, MutationResolvers } from "./../generated/graphql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getRandomUser, { randomUserType } from "./utils/randomUser";
export const secret = process.env.SECRET as string;

export type TokenDecoded = {
  _id?: string;
};

export const verifyToken = (
  token?: string
): Promise<TokenDecoded | "string"> => {
  return new Promise((resolve, reject) => {
    try {
      const decoded = jwt.verify(token ?? "", secret);
      return resolve(decoded as TokenDecoded);
    } catch (err) {
      return reject("Token inválido.");
    }
  });
};

export const userQueries: QueryResolvers = {
  getUsers: async (_, args, context) => {
    console.log("get");
    return await context.dataSources.User.find();
  },
  getUserById: async (_, { _id }, context) => {
    try {
      const user = await context.dataSources.User.findOne({ _id });
      const tweets = await context.dataSources.Tweet.find({ authorId: _id });

      for (const [index, tweet] of tweets.entries()) {
        const comments = await context.dataSources.Comment.find({
          originalTweet: tweet._id,
        });
        tweets[index]["commentsCounter"] = comments.length;
      }

      return {
        user,
        tweets,
      };
    } catch (err) {
      return null;
    }
  },
  validateToken: async (_, { token }) => {
    try {
      jwt.verify(token ?? "", secret);
      return true;
    } catch (err) {
      return false;
    }
  },
};

export const userMutations: MutationResolvers = {
  createRandomUser: async (_, __, { dataSources }) => {
    const getUniqueUser = async (): Promise<randomUserType> => {
      const randomUser = getRandomUser();
      const isRegistered = await dataSources.User.findOne({
        email: randomUser.email,
      });
      if (isRegistered) {
        return getUniqueUser();
      }
      return randomUser;
    };

    const user = await getUniqueUser();
    const saved = await new dataSources.User(user).save();
    saved.token = jwt.sign({ _id: saved._id }, secret);
    return saved;
  },
  follow: async (_, { _id, followingId, token }, { dataSources }) => {
    await verifyToken(token as string);
    const mainUser = await dataSources.User.findOne({ _id });
    const secondUser = await dataSources.User.findOne({
      _id: followingId,
    });

    const userFollowings = new Set(mainUser.following);
    userFollowings.add(followingId);
    mainUser.following = [...userFollowings];

    const followers = new Set(secondUser.followers);
    followers.add(_id);
    secondUser.followers = [...followers];

    await dataSources.User.findOneAndUpdate({ _id: followingId }, secondUser);
    await dataSources.User.findOneAndUpdate({ _id }, mainUser);
    return await dataSources.User.findOne({ _id });
  },
  unfollow: async (_, { _id, unfollowingId, token }, { dataSources }) => {
    await verifyToken(token as string);
    const mainUser = await dataSources.User.findOne({ _id });
    const secondUser = await dataSources.User.findOne({
      _id: unfollowingId,
    });

    mainUser.following = mainUser.following.filter(
      (id: string) => id !== unfollowingId
    );

    secondUser.followers = secondUser.followers.filter(
      (id: string) => id !== _id
    );

    await dataSources.User.findOneAndUpdate({ _id: unfollowingId }, secondUser);
    await dataSources.User.findOneAndUpdate({ _id }, mainUser);
    return await dataSources.User.findOne({ _id });
  },
  saveUser: async (_, { name, email, password, userName }, { dataSources }) => {
    const isRegistered = await dataSources.User.findOne({ email });
    const invalidUserName = await dataSources.User.findOne({ userName });
    const { color } = getRandomUser();

    if (isRegistered) {
      throw Error("Usuário já cadastrado. Tente recuperar sua senha.");
    }
    if (invalidUserName) {
      throw Error("Nome de usuário inválido.");
    }

    const hash = bcrypt.hashSync(password, 10);
    await new dataSources.User({
      color,
      name,
      email,
      userName,
      password: hash,
    }).save();

    const user = await dataSources.User.findOne({ email });
    user.token = jwt.sign({ _id: user._id }, secret);
    return user;
  },
  login: async (_, { email, password }, { dataSources }) => {
    try {
      const user = await dataSources.User.findOne({ email });
      const match = await bcrypt.compare(password, user.password);
      user.token = jwt.sign({ _id: user._id }, secret);
      if (match) {
        return user;
      }
      throw Error("E-mail ou senha incorretos.");
    } catch (err) {
      throw Error("E-mail ou senha incorretos.");
    }
  },
};
