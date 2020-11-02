import { QueryResolvers, MutationResolvers } from "./generated/graphql";
import {
  query as userQueries,
  mutation as userMutations,
} from "./User/resolvers";
import { query as tweetQueries } from "./Tweet/resolvers";

const Query: QueryResolvers = {
  ...userQueries,
  ...tweetQueries,
};

const Mutation: MutationResolvers = {
  ...userMutations,
};

export default { Query, Mutation };
