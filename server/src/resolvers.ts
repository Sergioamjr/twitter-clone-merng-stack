import { QueryResolvers } from "./generated/graphql";
import { query } from "./User/resolvers";

const Query: QueryResolvers = {
  ...query,
};

// const Mutation = {};

export default { Query };
