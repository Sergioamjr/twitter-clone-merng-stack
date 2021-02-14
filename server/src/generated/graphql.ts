import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};









export type Query = {
  __typename?: 'Query';
  root?: Maybe<Scalars['String']>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUserById?: Maybe<UserAndTweets>;
  validateToken?: Maybe<Scalars['Boolean']>;
  getTweets?: Maybe<Array<Maybe<Tweet>>>;
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['String'];
};


export type QueryValidateTokenArgs = {
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  root?: Maybe<Scalars['String']>;
  createRandomUser?: Maybe<LoggedUser>;
  follow?: Maybe<LoggedUser>;
  unfollow?: Maybe<LoggedUser>;
  login?: Maybe<LoggedUser>;
  saveUser?: Maybe<LoggedUser>;
  getMyFriendsTweets?: Maybe<Array<Maybe<Tweet>>>;
  getTweetByUserID?: Maybe<Array<Maybe<Tweet>>>;
  newTweet?: Maybe<Tweet>;
  deleteTweet?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Tweet>;
  deslike?: Maybe<Tweet>;
};


export type MutationFollowArgs = {
  _id: Scalars['String'];
  followingId: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUnfollowArgs = {
  _id: Scalars['String'];
  unfollowingId: Scalars['String'];
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationSaveUserArgs = {
  userName: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationGetMyFriendsTweetsArgs = {
  _id: Scalars['String'];
};


export type MutationGetTweetByUserIdArgs = {
  _id: Scalars['String'];
};


export type MutationNewTweetArgs = {
  content?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};


export type MutationDeleteTweetArgs = {
  _id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationLikeArgs = {
  _id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type MutationDeslikeArgs = {
  _id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['String']>>>;
  followers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LoggedUser = {
  __typename?: 'LoggedUser';
  _id?: Maybe<Scalars['ID']>;
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['String']>>>;
  followers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserAndTweets = {
  __typename?: 'UserAndTweets';
  user?: Maybe<User>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
};

export type Tweet = {
  __typename?: 'Tweet';
  _id?: Maybe<Scalars['ID']>;
  color?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  avatarColor?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  likedBy?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  LoggedUser: ResolverTypeWrapper<LoggedUser>;
  UserAndTweets: ResolverTypeWrapper<UserAndTweets>;
  Tweet: ResolverTypeWrapper<Tweet>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  AdditionalEntityFields: AdditionalEntityFields;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Mutation: {};
  User: User;
  ID: Scalars['ID'];
  LoggedUser: LoggedUser;
  UserAndTweets: UserAndTweets;
  Tweet: Tweet;
  Upload: Scalars['Upload'];
  AdditionalEntityFields: AdditionalEntityFields;
}>;

export type UnionDirectiveArgs = {   discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: Scalars['String']; };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  getUserById?: Resolver<Maybe<ResolversTypes['UserAndTweets']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, '_id'>>;
  validateToken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryValidateTokenArgs, 'token'>>;
  getTweets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  root?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createRandomUser?: Resolver<Maybe<ResolversTypes['LoggedUser']>, ParentType, ContextType>;
  follow?: Resolver<Maybe<ResolversTypes['LoggedUser']>, ParentType, ContextType, RequireFields<MutationFollowArgs, '_id' | 'followingId' | 'token'>>;
  unfollow?: Resolver<Maybe<ResolversTypes['LoggedUser']>, ParentType, ContextType, RequireFields<MutationUnfollowArgs, '_id' | 'unfollowingId' | 'token'>>;
  login?: Resolver<Maybe<ResolversTypes['LoggedUser']>, ParentType, ContextType, RequireFields<MutationLoginArgs, never>>;
  saveUser?: Resolver<Maybe<ResolversTypes['LoggedUser']>, ParentType, ContextType, RequireFields<MutationSaveUserArgs, 'userName' | 'name' | 'email' | 'password'>>;
  getMyFriendsTweets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType, RequireFields<MutationGetMyFriendsTweetsArgs, '_id'>>;
  getTweetByUserID?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType, RequireFields<MutationGetTweetByUserIdArgs, '_id'>>;
  newTweet?: Resolver<Maybe<ResolversTypes['Tweet']>, ParentType, ContextType, RequireFields<MutationNewTweetArgs, 'token'>>;
  deleteTweet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteTweetArgs, never>>;
  like?: Resolver<Maybe<ResolversTypes['Tweet']>, ParentType, ContextType, RequireFields<MutationLikeArgs, never>>;
  deslike?: Resolver<Maybe<ResolversTypes['Tweet']>, ParentType, ContextType, RequireFields<MutationDeslikeArgs, never>>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoggedUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoggedUser'] = ResolversParentTypes['LoggedUser']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserAndTweetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAndTweets'] = ResolversParentTypes['UserAndTweets']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  tweets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tweet']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TweetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tweet'] = ResolversParentTypes['Tweet']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likedBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  LoggedUser?: LoggedUserResolvers<ContextType>;
  UserAndTweets?: UserAndTweetsResolvers<ContextType>;
  Tweet?: TweetResolvers<ContextType>;
  Upload?: GraphQLScalarType;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
}>;


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';