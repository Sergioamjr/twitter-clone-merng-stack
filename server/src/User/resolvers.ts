import { QueryResolvers } from "./../generated/graphql";

export const query: QueryResolvers = {
  getUsers: () => [
    {
      email: "123",
    },
  ],
};
