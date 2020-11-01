import { QueryResolvers, MutationResolvers } from "./generated/graphql";
import { query, mutation } from "./User/resolvers";

const Query: QueryResolvers = {
  ...query,
};

const Mutation: MutationResolvers = {
  ...mutation,
};

export default { Query, Mutation };
