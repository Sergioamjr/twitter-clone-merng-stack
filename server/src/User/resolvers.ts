import { QueryResolvers, MutationResolvers } from "./../generated/graphql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const secret =
  "4AB2475373A1A60B30837F84BCA73DF072DA24D7A0A6AFD5B7C99059F63D9F12";

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

export const query: QueryResolvers = {
  getUsers: async (_, args, context) => {
    return await context.dataSources.User.find();
  },
  getUserById: async (_, { _id }, context) => {
    try {
      return await context.dataSources.User.findOne({ _id });
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

export const mutation: MutationResolvers = {
  addToFriends: async (_, { _id, newFriendId, token }, { dataSources }) => {
    await verifyToken(token as string);
    const currentUser = await dataSources.User.findOne({ _id });
    const newFriend = await dataSources.User.findOne({
      _id: newFriendId,
    });

    const currentUserFriends = new Set(currentUser.friends);
    currentUserFriends.add(newFriendId);
    currentUser.friends = [...currentUserFriends];

    const newFriendFriends = new Set(newFriend.friends);
    newFriendFriends.add(_id);
    newFriend.friends = [...newFriendFriends];

    await dataSources.User.findOneAndUpdate({ _id: newFriendId }, newFriend);
    await dataSources.User.findOneAndUpdate({ _id }, currentUser);
    return await dataSources.User.findOne({ _id });
  },
  removeFromFriends: async (_, { _id, friendId, token }, { dataSources }) => {
    await verifyToken(token as string);
    const currentUser = await dataSources.User.findOne({ _id });
    const newFriend = await dataSources.User.findOne({
      _id: friendId,
    });

    currentUser.friends = currentUser.friends.filter(
      (id: string) => id !== friendId
    );

    newFriend.friends = newFriend.friends.filter((id: string) => id !== _id);

    await dataSources.User.findOneAndUpdate({ _id: friendId }, newFriend);
    await dataSources.User.findOneAndUpdate({ _id }, currentUser);
    return await dataSources.User.findOne({ _id: friendId });
  },
  saveUser: async (_, { name, email, password, userName }, { dataSources }) => {
    const isRegistered = await dataSources.User.findOne({ email });
    const invalidUserName = await dataSources.User.findOne({ userName });

    if (isRegistered) {
      throw Error("Usuário já cadastrado. Tente recuperar sua senha.");
    }
    if (invalidUserName) {
      throw Error("Nome de usuário inválido.");
    }

    const hash = bcrypt.hashSync(password, 10);
    await new dataSources.User({
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
