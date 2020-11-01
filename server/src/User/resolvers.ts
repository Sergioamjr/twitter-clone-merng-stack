import { QueryResolvers } from "./../generated/graphql";

const user = {
  _id: "23213",
  name: "Sergio",
  email: "dasd@gmail.com",
  password: "123123",
};

export const query: QueryResolvers = {
  getUsers: (_, args, context) => [user],
  getUserById: (_, args, context) => ({ ...user, token: "31231" }),
};
