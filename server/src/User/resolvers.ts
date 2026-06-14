import { QueryResolvers, MutationResolvers } from "./../generated/graphql";
import jwt from "jsonwebtoken";
import getRandomUser from "./utils/randomUser";
import { GetUserUseCase } from "./application/get-user-use-case";
import { GetUserByIdUseCase } from "./application/get-user-by-id-use-case";
import { CreateUserUseCase } from "./application/create-user-use-case";
import { SaveUserUseCase } from "./application/save-user-use-case";
import { LoginUseCase } from "./application/login-use-case";
import { FollowUseCase } from "./application/follow-use-case";
import { UnfollowUseCase } from "./application/unfollow-use-case";
import FirebaseRepository from "./infrastructure/firebase.repository";

export const secret = process.env.SECRET as string;

const getUserUseCase = new GetUserUseCase(FirebaseRepository);
const getUserByIdUseCase = new GetUserByIdUseCase(FirebaseRepository);
const createUserUseCase = new CreateUserUseCase(FirebaseRepository);
const saveUserUseCase = new SaveUserUseCase(FirebaseRepository);
const loginUseCase = new LoginUseCase(FirebaseRepository);
const followUseCase = new FollowUseCase(FirebaseRepository);
const unfollowUseCase = new UnfollowUseCase(FirebaseRepository);

export type TokenDecoded = {
  _id?: string;
};

export const verifyToken = (
  token?: string,
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
  getUsers: async () => {
    return await getUserUseCase.execute();
  },
  getUserById: async (_, { _id }, context) => {
    try {
      const user = await getUserByIdUseCase.execute(_id);
      const tweets = await context.dataSources.Tweet.find({ authorId: _id });

      for (const [index, tweet] of tweets.entries()) {
        const comments = await context.dataSources.Comment.find({
          originalTweet: tweet._id,
        });
        tweets[index]["commentsCounter"] = comments.length;
      }

      return { user, tweets };
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
  createRandomUser: async () => {
    const user = await createUserUseCase.execute();
    const token = jwt.sign({ _id: user._id }, secret);
    return { ...user, token };
  },
  follow: async (_, { _id, followingId, token }) => {
    await verifyToken(token as string);
    const user = await followUseCase.execute(_id, followingId as string);
    return user;
  },
  unfollow: async (_, { _id, unfollowingId, token }) => {
    await verifyToken(token as string);
    const user = await unfollowUseCase.execute(_id, unfollowingId as string);
    return user;
  },
  saveUser: async (_, { name, email, password, userName }) => {
    const { color } = getRandomUser();
    const user = await saveUserUseCase.execute({
      name,
      email,
      password,
      userName,
      color,
    });
    const token = jwt.sign({ _id: user._id }, secret);
    return { ...user, token };
  },
  login: async (_, { email, password }) => {
    try {
      const user = await loginUseCase.execute(email as string, password as string);
      const token = jwt.sign({ _id: user._id }, secret);
      return { ...user, token };
    } catch (err: any) {
      throw new Error(err.message ?? "E-mail ou senha incorretos.");
    }
  },
};
