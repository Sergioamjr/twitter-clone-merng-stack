import {
  QueryResolvers,
  MutationResolvers,
  SubscriptionResolvers,
} from "./generated/graphql";
import { userQueries, userMutations } from "./User/resolvers";
import {
  tweetQueries,
  tweetMutations,
  tweetSubscriptions,
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

const Subscription: SubscriptionResolvers = {
  ...tweetSubscriptions,
};

export default { Query, Mutation, Subscription };
