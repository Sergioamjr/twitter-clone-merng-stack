import { QueryResolvers, MutationResolvers } from "./../generated/graphql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secret =
  "4AB2475373A1A60B30837F84BCA73DF072DA24D7A0A6AFD5B7C99059F63D9F12";

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
  saveUser: async (_, { name, email, password }, { dataSources }) => {
    const isRegistered = await dataSources.User.findOne({ email });
    if (isRegistered) {
      throw Error("Usuário já cadastrado. Tente recuperar sua senha.");
    }
    const hash = bcrypt.hashSync(password, 10);
    await new dataSources.User({
      name,
      email,
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
