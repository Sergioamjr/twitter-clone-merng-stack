import { QueryResolvers, MutationResolvers } from "./generated/graphql";
import { userQueries, userMutations } from "./User/resolvers";
import { tweetQueries, tweetMutations } from "./Tweet/resolvers";
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
