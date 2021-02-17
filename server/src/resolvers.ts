import { QueryResolvers, MutationResolvers } from "./generated/graphql";
import {
  query as userQueries,
  mutation as userMutations,
} from "./User/resolvers";
import {
  query as tweetQueries,
  mutation as tweetMutations,
} from "./Tweet/resolvers";
import { commentsQueries, commentsMutations } from "./Comment/resolvers";

const Query: QueryResolvers = {
  ...userQueries,
  ...tweetQueries,
  ...commentsQueries,
};

const Mutation: MutationResolvers = {
  ...userMutations,
  ...tweetMutations,
  ...commentsMutations,
};

export default { Query, Mutation };
