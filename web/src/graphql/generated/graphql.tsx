/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  _id?: Maybe<Scalars['ID']['output']>;
  authorId?: Maybe<Scalars['String']['output']>;
  avatarColor?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  likedBy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  originalTweet?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type LoggedUser = {
  __typename?: 'LoggedUser';
  _id?: Maybe<Scalars['ID']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  following?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRandomUser?: Maybe<LoggedUser>;
  deleteComment?: Maybe<Scalars['Boolean']['output']>;
  deleteTweet?: Maybe<Scalars['Boolean']['output']>;
  deslike?: Maybe<Tweet>;
  deslikeComment?: Maybe<Comment>;
  follow?: Maybe<LoggedUser>;
  getMyFriendsTweets?: Maybe<Array<Maybe<Tweet>>>;
  getTweetByUserID?: Maybe<Array<Maybe<Tweet>>>;
  like?: Maybe<Tweet>;
  likeComment?: Maybe<Comment>;
  login?: Maybe<LoggedUser>;
  newComment?: Maybe<Comment>;
  newTweet?: Maybe<Tweet>;
  root?: Maybe<Scalars['String']['output']>;
  saveUser?: Maybe<LoggedUser>;
  unfollow?: Maybe<LoggedUser>;
};


export type MutationDeleteCommentArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTweetArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeslikeArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeslikeCommentArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFollowArgs = {
  _id: Scalars['String']['input'];
  followingId: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationGetMyFriendsTweetsArgs = {
  _id: Scalars['String']['input'];
};


export type MutationGetTweetByUserIdArgs = {
  _id: Scalars['String']['input'];
};


export type MutationLikeArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLikeCommentArgs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNewCommentArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  originalTweet: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationNewTweetArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationSaveUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationUnfollowArgs = {
  _id: Scalars['String']['input'];
  token: Scalars['String']['input'];
  unfollowingId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getComments?: Maybe<Array<Maybe<Comment>>>;
  getCommentsByTweetId?: Maybe<Array<Maybe<Comment>>>;
  getTweetById?: Maybe<Tweet>;
  getTweets?: Maybe<Array<Maybe<Tweet>>>;
  getUserById?: Maybe<UserAndTweets>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  root?: Maybe<Scalars['String']['output']>;
  validateToken?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryGetCommentsByTweetIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryGetTweetByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryValidateTokenArgs = {
  token: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  hasANewTweet?: Maybe<Tweet>;
  root?: Maybe<Scalars['String']['output']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  _id?: Maybe<Scalars['ID']['output']>;
  authorId?: Maybe<Scalars['String']['output']>;
  avatarColor?: Maybe<Scalars['String']['output']>;
  commentsCounter?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  likedBy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  following?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserAndTweets = {
  __typename?: 'UserAndTweets';
  tweets?: Maybe<Array<Maybe<Tweet>>>;
  user?: Maybe<User>;
};

export type CommentFragment = { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, originalTweet: string | null, likedBy: Array<string | null> | null, createdAt: string | null };

export type LoggedUserFragment = { _id: string | null, color: string | null, name: string | null, token: string | null, email: string | null, userName: string | null, followers: Array<string | null> | null, following: Array<string | null> | null };

export type TweetFragment = { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null };

export type UserFragment = { email: string | null, color: string | null, name: string | null, userName: string | null, _id: string | null, followers: Array<string | null> | null, following: Array<string | null> | null };

export type NewCommentMutationVariables = Exact<{
  content?: string | null | undefined;
  token: string;
  originalTweet: string;
}>;


export type NewCommentMutation = { newComment: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, originalTweet: string | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type CreateRandomUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateRandomUserMutation = { createRandomUser: { _id: string | null, color: string | null, name: string | null, token: string | null, email: string | null, userName: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null };

export type DeleteCommentMutationVariables = Exact<{
  _id: string;
  token: string;
}>;


export type DeleteCommentMutation = { deleteComment: boolean | null };

export type DeleteTweetMutationVariables = Exact<{
  _id?: string | null | undefined;
  token: string;
}>;


export type DeleteTweetMutation = { deleteTweet: boolean | null };

export type DeslikeCommentMutationVariables = Exact<{
  _id: string;
  token: string;
}>;


export type DeslikeCommentMutation = { deslikeComment: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, originalTweet: string | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type DeslikeMutationVariables = Exact<{
  _id?: string | null | undefined;
  token: string;
}>;


export type DeslikeMutation = { deslike: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type FollowMutationVariables = Exact<{
  _id: string;
  followingId: string;
  token: string;
}>;


export type FollowMutation = { follow: { _id: string | null, color: string | null, name: string | null, token: string | null, email: string | null, userName: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null };

export type GetMyFriendsTweetsMutationVariables = Exact<{
  _id: string;
}>;


export type GetMyFriendsTweetsMutation = { getMyFriendsTweets: Array<{ content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null> | null };

export type GetTweetByUserIdMutationVariables = Exact<{
  _id: string;
}>;


export type GetTweetByUserIdMutation = { getTweetByUserID: Array<{ content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null> | null };

export type LikeCommentMutationVariables = Exact<{
  _id: string;
  token: string;
}>;


export type LikeCommentMutation = { likeComment: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, originalTweet: string | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type LikeMutationVariables = Exact<{
  _id?: string | null | undefined;
  token: string;
}>;


export type LikeMutation = { like: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type LoginMutationVariables = Exact<{
  password: string;
  email: string;
}>;


export type LoginMutation = { login: { _id: string | null, color: string | null, name: string | null, token: string | null, email: string | null, userName: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null };

export type NewTweetMutationVariables = Exact<{
  content?: string | null | undefined;
  token: string;
}>;


export type NewTweetMutation = { newTweet: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type SaveUserMutationVariables = Exact<{
  userName: string;
  name: string;
  password: string;
  email: string;
}>;


export type SaveUserMutation = { saveUser: { _id: string | null, color: string | null, name: string | null, token: string | null, email: string | null, userName: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null };

export type UnfollowMutationVariables = Exact<{
  _id: string;
  unfollowingId: string;
  token: string;
}>;


export type UnfollowMutation = { unfollow: { _id: string | null, color: string | null, name: string | null, token: string | null, email: string | null, userName: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null };

export type GetCommentsByTweetIdQueryVariables = Exact<{
  _id: string;
}>;


export type GetCommentsByTweetIdQuery = { getCommentsByTweetId: Array<{ content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, originalTweet: string | null, likedBy: Array<string | null> | null, createdAt: string | null } | null> | null };

export type GetCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommentsQuery = { getComments: Array<{ content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, originalTweet: string | null, likedBy: Array<string | null> | null, createdAt: string | null } | null> | null };

export type GetTweetByIdQueryVariables = Exact<{
  _id: string;
}>;


export type GetTweetByIdQuery = { getTweetById: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export type GetTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsQuery = { getTweets: Array<{ content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null> | null };

export type GetUserByIdQueryVariables = Exact<{
  _id: string;
}>;


export type GetUserByIdQuery = { getUserById: { user: { email: string | null, color: string | null, name: string | null, userName: string | null, _id: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null, tweets: Array<{ content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null> | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { getUsers: Array<{ email: string | null, color: string | null, name: string | null, userName: string | null, _id: string | null, followers: Array<string | null> | null, following: Array<string | null> | null } | null> | null };

export type HasANewTweetSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HasANewTweetSubscription = { hasANewTweet: { content: string | null, _id: string | null, authorId: string | null, name: string | null, avatarColor: string | null, userName: string | null, commentsCounter: number | null, likedBy: Array<string | null> | null, createdAt: string | null } | null };

export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  content
  _id
  authorId
  name
  avatarColor
  userName
  originalTweet
  likedBy
  createdAt
}
    `;
export const LoggedUserFragmentDoc = gql`
    fragment LoggedUser on LoggedUser {
  _id
  color
  name
  token
  email
  userName
  followers
  following
}
    `;
export const TweetFragmentDoc = gql`
    fragment Tweet on Tweet {
  content
  _id
  authorId
  name
  avatarColor
  userName
  commentsCounter
  likedBy
  createdAt
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  email
  color
  name
  userName
  _id
  followers
  following
}
    `;
export const NewCommentDocument = gql`
    mutation newComment($content: String, $token: String!, $originalTweet: String!) {
  newComment(content: $content, token: $token, originalTweet: $originalTweet) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type NewCommentMutationFn = Apollo.MutationFunction<NewCommentMutation, NewCommentMutationVariables>;

/**
 * __useNewCommentMutation__
 *
 * To run a mutation, you first call `useNewCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newCommentMutation, { data, loading, error }] = useNewCommentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      token: // value for 'token'
 *      originalTweet: // value for 'originalTweet'
 *   },
 * });
 */
export function useNewCommentMutation(baseOptions?: Apollo.MutationHookOptions<NewCommentMutation, NewCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewCommentMutation, NewCommentMutationVariables>(NewCommentDocument, options);
      }
export type NewCommentMutationHookResult = ReturnType<typeof useNewCommentMutation>;
export type NewCommentMutationResult = Apollo.MutationResult<NewCommentMutation>;
export type NewCommentMutationOptions = Apollo.BaseMutationOptions<NewCommentMutation, NewCommentMutationVariables>;
export const CreateRandomUserDocument = gql`
    mutation createRandomUser {
  createRandomUser {
    ...LoggedUser
  }
}
    ${LoggedUserFragmentDoc}`;
export type CreateRandomUserMutationFn = Apollo.MutationFunction<CreateRandomUserMutation, CreateRandomUserMutationVariables>;

/**
 * __useCreateRandomUserMutation__
 *
 * To run a mutation, you first call `useCreateRandomUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRandomUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRandomUserMutation, { data, loading, error }] = useCreateRandomUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateRandomUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateRandomUserMutation, CreateRandomUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRandomUserMutation, CreateRandomUserMutationVariables>(CreateRandomUserDocument, options);
      }
export type CreateRandomUserMutationHookResult = ReturnType<typeof useCreateRandomUserMutation>;
export type CreateRandomUserMutationResult = Apollo.MutationResult<CreateRandomUserMutation>;
export type CreateRandomUserMutationOptions = Apollo.BaseMutationOptions<CreateRandomUserMutation, CreateRandomUserMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($_id: String!, $token: String!) {
  deleteComment(_id: $_id, token: $token)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeleteTweetDocument = gql`
    mutation deleteTweet($_id: String, $token: String!) {
  deleteTweet(_id: $_id, token: $token)
}
    `;
export type DeleteTweetMutationFn = Apollo.MutationFunction<DeleteTweetMutation, DeleteTweetMutationVariables>;

/**
 * __useDeleteTweetMutation__
 *
 * To run a mutation, you first call `useDeleteTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTweetMutation, { data, loading, error }] = useDeleteTweetMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDeleteTweetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTweetMutation, DeleteTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTweetMutation, DeleteTweetMutationVariables>(DeleteTweetDocument, options);
      }
export type DeleteTweetMutationHookResult = ReturnType<typeof useDeleteTweetMutation>;
export type DeleteTweetMutationResult = Apollo.MutationResult<DeleteTweetMutation>;
export type DeleteTweetMutationOptions = Apollo.BaseMutationOptions<DeleteTweetMutation, DeleteTweetMutationVariables>;
export const DeslikeCommentDocument = gql`
    mutation deslikeComment($_id: String!, $token: String!) {
  deslikeComment(_id: $_id, token: $token) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type DeslikeCommentMutationFn = Apollo.MutationFunction<DeslikeCommentMutation, DeslikeCommentMutationVariables>;

/**
 * __useDeslikeCommentMutation__
 *
 * To run a mutation, you first call `useDeslikeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeslikeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deslikeCommentMutation, { data, loading, error }] = useDeslikeCommentMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDeslikeCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeslikeCommentMutation, DeslikeCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeslikeCommentMutation, DeslikeCommentMutationVariables>(DeslikeCommentDocument, options);
      }
export type DeslikeCommentMutationHookResult = ReturnType<typeof useDeslikeCommentMutation>;
export type DeslikeCommentMutationResult = Apollo.MutationResult<DeslikeCommentMutation>;
export type DeslikeCommentMutationOptions = Apollo.BaseMutationOptions<DeslikeCommentMutation, DeslikeCommentMutationVariables>;
export const DeslikeDocument = gql`
    mutation deslike($_id: String, $token: String!) {
  deslike(_id: $_id, token: $token) {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;
export type DeslikeMutationFn = Apollo.MutationFunction<DeslikeMutation, DeslikeMutationVariables>;

/**
 * __useDeslikeMutation__
 *
 * To run a mutation, you first call `useDeslikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeslikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deslikeMutation, { data, loading, error }] = useDeslikeMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDeslikeMutation(baseOptions?: Apollo.MutationHookOptions<DeslikeMutation, DeslikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeslikeMutation, DeslikeMutationVariables>(DeslikeDocument, options);
      }
export type DeslikeMutationHookResult = ReturnType<typeof useDeslikeMutation>;
export type DeslikeMutationResult = Apollo.MutationResult<DeslikeMutation>;
export type DeslikeMutationOptions = Apollo.BaseMutationOptions<DeslikeMutation, DeslikeMutationVariables>;
export const FollowDocument = gql`
    mutation follow($_id: String!, $followingId: String!, $token: String!) {
  follow(_id: $_id, followingId: $followingId, token: $token) {
    ...LoggedUser
  }
}
    ${LoggedUserFragmentDoc}`;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      followingId: // value for 'followingId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const GetMyFriendsTweetsDocument = gql`
    mutation getMyFriendsTweets($_id: String!) {
  getMyFriendsTweets(_id: $_id) {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;
export type GetMyFriendsTweetsMutationFn = Apollo.MutationFunction<GetMyFriendsTweetsMutation, GetMyFriendsTweetsMutationVariables>;

/**
 * __useGetMyFriendsTweetsMutation__
 *
 * To run a mutation, you first call `useGetMyFriendsTweetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetMyFriendsTweetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getMyFriendsTweetsMutation, { data, loading, error }] = useGetMyFriendsTweetsMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetMyFriendsTweetsMutation(baseOptions?: Apollo.MutationHookOptions<GetMyFriendsTweetsMutation, GetMyFriendsTweetsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetMyFriendsTweetsMutation, GetMyFriendsTweetsMutationVariables>(GetMyFriendsTweetsDocument, options);
      }
export type GetMyFriendsTweetsMutationHookResult = ReturnType<typeof useGetMyFriendsTweetsMutation>;
export type GetMyFriendsTweetsMutationResult = Apollo.MutationResult<GetMyFriendsTweetsMutation>;
export type GetMyFriendsTweetsMutationOptions = Apollo.BaseMutationOptions<GetMyFriendsTweetsMutation, GetMyFriendsTweetsMutationVariables>;
export const GetTweetByUserIdDocument = gql`
    mutation getTweetByUserID($_id: String!) {
  getTweetByUserID(_id: $_id) {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;
export type GetTweetByUserIdMutationFn = Apollo.MutationFunction<GetTweetByUserIdMutation, GetTweetByUserIdMutationVariables>;

/**
 * __useGetTweetByUserIdMutation__
 *
 * To run a mutation, you first call `useGetTweetByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTweetByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTweetByUserIdMutation, { data, loading, error }] = useGetTweetByUserIdMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetTweetByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<GetTweetByUserIdMutation, GetTweetByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetTweetByUserIdMutation, GetTweetByUserIdMutationVariables>(GetTweetByUserIdDocument, options);
      }
export type GetTweetByUserIdMutationHookResult = ReturnType<typeof useGetTweetByUserIdMutation>;
export type GetTweetByUserIdMutationResult = Apollo.MutationResult<GetTweetByUserIdMutation>;
export type GetTweetByUserIdMutationOptions = Apollo.BaseMutationOptions<GetTweetByUserIdMutation, GetTweetByUserIdMutationVariables>;
export const LikeCommentDocument = gql`
    mutation likeComment($_id: String!, $token: String!) {
  likeComment(_id: $_id, token: $token) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type LikeCommentMutationFn = Apollo.MutationFunction<LikeCommentMutation, LikeCommentMutationVariables>;

/**
 * __useLikeCommentMutation__
 *
 * To run a mutation, you first call `useLikeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCommentMutation, { data, loading, error }] = useLikeCommentMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useLikeCommentMutation(baseOptions?: Apollo.MutationHookOptions<LikeCommentMutation, LikeCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeCommentMutation, LikeCommentMutationVariables>(LikeCommentDocument, options);
      }
export type LikeCommentMutationHookResult = ReturnType<typeof useLikeCommentMutation>;
export type LikeCommentMutationResult = Apollo.MutationResult<LikeCommentMutation>;
export type LikeCommentMutationOptions = Apollo.BaseMutationOptions<LikeCommentMutation, LikeCommentMutationVariables>;
export const LikeDocument = gql`
    mutation like($_id: String, $token: String!) {
  like(_id: $_id, token: $token) {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, options);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const LoginDocument = gql`
    mutation login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    ...LoggedUser
  }
}
    ${LoggedUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const NewTweetDocument = gql`
    mutation newTweet($content: String, $token: String!) {
  newTweet(content: $content, token: $token) {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;
export type NewTweetMutationFn = Apollo.MutationFunction<NewTweetMutation, NewTweetMutationVariables>;

/**
 * __useNewTweetMutation__
 *
 * To run a mutation, you first call `useNewTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newTweetMutation, { data, loading, error }] = useNewTweetMutation({
 *   variables: {
 *      content: // value for 'content'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useNewTweetMutation(baseOptions?: Apollo.MutationHookOptions<NewTweetMutation, NewTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewTweetMutation, NewTweetMutationVariables>(NewTweetDocument, options);
      }
export type NewTweetMutationHookResult = ReturnType<typeof useNewTweetMutation>;
export type NewTweetMutationResult = Apollo.MutationResult<NewTweetMutation>;
export type NewTweetMutationOptions = Apollo.BaseMutationOptions<NewTweetMutation, NewTweetMutationVariables>;
export const SaveUserDocument = gql`
    mutation saveUser($userName: String!, $name: String!, $password: String!, $email: String!) {
  saveUser(userName: $userName, name: $name, password: $password, email: $email) {
    ...LoggedUser
  }
}
    ${LoggedUserFragmentDoc}`;
export type SaveUserMutationFn = Apollo.MutationFunction<SaveUserMutation, SaveUserMutationVariables>;

/**
 * __useSaveUserMutation__
 *
 * To run a mutation, you first call `useSaveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserMutation, { data, loading, error }] = useSaveUserMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSaveUserMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserMutation, SaveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserMutation, SaveUserMutationVariables>(SaveUserDocument, options);
      }
export type SaveUserMutationHookResult = ReturnType<typeof useSaveUserMutation>;
export type SaveUserMutationResult = Apollo.MutationResult<SaveUserMutation>;
export type SaveUserMutationOptions = Apollo.BaseMutationOptions<SaveUserMutation, SaveUserMutationVariables>;
export const UnfollowDocument = gql`
    mutation unfollow($_id: String!, $unfollowingId: String!, $token: String!) {
  unfollow(_id: $_id, unfollowingId: $unfollowingId, token: $token) {
    ...LoggedUser
  }
}
    ${LoggedUserFragmentDoc}`;
export type UnfollowMutationFn = Apollo.MutationFunction<UnfollowMutation, UnfollowMutationVariables>;

/**
 * __useUnfollowMutation__
 *
 * To run a mutation, you first call `useUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowMutation, { data, loading, error }] = useUnfollowMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      unfollowingId: // value for 'unfollowingId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUnfollowMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowMutation, UnfollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowMutation, UnfollowMutationVariables>(UnfollowDocument, options);
      }
export type UnfollowMutationHookResult = ReturnType<typeof useUnfollowMutation>;
export type UnfollowMutationResult = Apollo.MutationResult<UnfollowMutation>;
export type UnfollowMutationOptions = Apollo.BaseMutationOptions<UnfollowMutation, UnfollowMutationVariables>;
export const GetCommentsByTweetIdDocument = gql`
    query getCommentsByTweetId($_id: String!) {
  getCommentsByTweetId(_id: $_id) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useGetCommentsByTweetIdQuery__
 *
 * To run a query within a React component, call `useGetCommentsByTweetIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByTweetIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByTweetIdQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetCommentsByTweetIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables> & ({ variables: GetCommentsByTweetIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>(GetCommentsByTweetIdDocument, options);
      }
export function useGetCommentsByTweetIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>(GetCommentsByTweetIdDocument, options);
        }
// @ts-ignore
export function useGetCommentsByTweetIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>;
export function useGetCommentsByTweetIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetCommentsByTweetIdQuery | undefined, GetCommentsByTweetIdQueryVariables>;
export function useGetCommentsByTweetIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>(GetCommentsByTweetIdDocument, options);
        }
export type GetCommentsByTweetIdQueryHookResult = ReturnType<typeof useGetCommentsByTweetIdQuery>;
export type GetCommentsByTweetIdLazyQueryHookResult = ReturnType<typeof useGetCommentsByTweetIdLazyQuery>;
export type GetCommentsByTweetIdSuspenseQueryHookResult = ReturnType<typeof useGetCommentsByTweetIdSuspenseQuery>;
export type GetCommentsByTweetIdQueryResult = Apollo.QueryResult<GetCommentsByTweetIdQuery, GetCommentsByTweetIdQueryVariables>;
export const GetCommentsDocument = gql`
    query getComments {
  getComments {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
// @ts-ignore
export function useGetCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>): Apollo.UseSuspenseQueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export function useGetCommentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>): Apollo.UseSuspenseQueryResult<GetCommentsQuery | undefined, GetCommentsQueryVariables>;
export function useGetCommentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsSuspenseQueryHookResult = ReturnType<typeof useGetCommentsSuspenseQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetTweetByIdDocument = gql`
    query getTweetById($_id: String!) {
  getTweetById(_id: $_id) {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;

/**
 * __useGetTweetByIdQuery__
 *
 * To run a query within a React component, call `useGetTweetByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetByIdQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetTweetByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables> & ({ variables: GetTweetByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetByIdQuery, GetTweetByIdQueryVariables>(GetTweetByIdDocument, options);
      }
export function useGetTweetByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetByIdQuery, GetTweetByIdQueryVariables>(GetTweetByIdDocument, options);
        }
// @ts-ignore
export function useGetTweetByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetTweetByIdQuery, GetTweetByIdQueryVariables>;
export function useGetTweetByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetTweetByIdQuery | undefined, GetTweetByIdQueryVariables>;
export function useGetTweetByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTweetByIdQuery, GetTweetByIdQueryVariables>(GetTweetByIdDocument, options);
        }
export type GetTweetByIdQueryHookResult = ReturnType<typeof useGetTweetByIdQuery>;
export type GetTweetByIdLazyQueryHookResult = ReturnType<typeof useGetTweetByIdLazyQuery>;
export type GetTweetByIdSuspenseQueryHookResult = ReturnType<typeof useGetTweetByIdSuspenseQuery>;
export type GetTweetByIdQueryResult = Apollo.QueryResult<GetTweetByIdQuery, GetTweetByIdQueryVariables>;
export const GetTweetsDocument = gql`
    query getTweets {
  getTweets {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;

/**
 * __useGetTweetsQuery__
 *
 * To run a query within a React component, call `useGetTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTweetsQuery(baseOptions?: Apollo.QueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
      }
export function useGetTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
        }
// @ts-ignore
export function useGetTweetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>): Apollo.UseSuspenseQueryResult<GetTweetsQuery, GetTweetsQueryVariables>;
export function useGetTweetsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>): Apollo.UseSuspenseQueryResult<GetTweetsQuery | undefined, GetTweetsQueryVariables>;
export function useGetTweetsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
        }
export type GetTweetsQueryHookResult = ReturnType<typeof useGetTweetsQuery>;
export type GetTweetsLazyQueryHookResult = ReturnType<typeof useGetTweetsLazyQuery>;
export type GetTweetsSuspenseQueryHookResult = ReturnType<typeof useGetTweetsSuspenseQuery>;
export type GetTweetsQueryResult = Apollo.QueryResult<GetTweetsQuery, GetTweetsQueryVariables>;
export const GetUserByIdDocument = gql`
    query getUserById($_id: String!) {
  getUserById(_id: $_id) {
    user {
      ...User
    }
    tweets {
      ...Tweet
    }
  }
}
    ${UserFragmentDoc}
${TweetFragmentDoc}`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
// @ts-ignore
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserByIdQuery | undefined, GetUserByIdQueryVariables>;
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
// @ts-ignore
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>): Apollo.UseSuspenseQueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>): Apollo.UseSuspenseQueryResult<GetUsersQuery | undefined, GetUsersQueryVariables>;
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const HasANewTweetDocument = gql`
    subscription hasANewTweet {
  hasANewTweet {
    ...Tweet
  }
}
    ${TweetFragmentDoc}`;

/**
 * __useHasANewTweetSubscription__
 *
 * To run a query within a React component, call `useHasANewTweetSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHasANewTweetSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasANewTweetSubscription({
 *   variables: {
 *   },
 * });
 */
export function useHasANewTweetSubscription(baseOptions?: Apollo.SubscriptionHookOptions<HasANewTweetSubscription, HasANewTweetSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<HasANewTweetSubscription, HasANewTweetSubscriptionVariables>(HasANewTweetDocument, options);
      }
export type HasANewTweetSubscriptionHookResult = ReturnType<typeof useHasANewTweetSubscription>;
export type HasANewTweetSubscriptionResult = Apollo.SubscriptionResult<HasANewTweetSubscription>;