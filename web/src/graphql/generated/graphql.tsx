import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  getTweetById?: Maybe<Tweet>;
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['String'];
};


export type QueryValidateTokenArgs = {
  token: Scalars['String'];
};


export type QueryGetTweetByIdArgs = {
  _id: Scalars['String'];
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


export type LoggedUserFragment = (
  { __typename?: 'LoggedUser' }
  & Pick<LoggedUser, '_id' | 'color' | 'name' | 'token' | 'email' | 'userName' | 'followers' | 'following'>
);

export type TweetFragment = (
  { __typename?: 'Tweet' }
  & Pick<Tweet, 'content' | '_id' | 'authorId' | 'name' | 'avatarColor' | 'userName' | 'likedBy' | 'createdAt'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'email' | 'color' | 'name' | 'userName' | '_id' | 'followers' | 'following'>
);

export type CreateRandomUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateRandomUserMutation = (
  { __typename?: 'Mutation' }
  & { createRandomUser?: Maybe<(
    { __typename?: 'LoggedUser' }
    & LoggedUserFragment
  )> }
);

export type DeleteTweetMutationVariables = Exact<{
  _id?: Maybe<Scalars['String']>;
  token: Scalars['String'];
}>;


export type DeleteTweetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTweet'>
);

export type DeslikeMutationVariables = Exact<{
  _id?: Maybe<Scalars['String']>;
  token: Scalars['String'];
}>;


export type DeslikeMutation = (
  { __typename?: 'Mutation' }
  & { deslike?: Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )> }
);

export type FollowMutationVariables = Exact<{
  _id: Scalars['String'];
  followingId: Scalars['String'];
  token: Scalars['String'];
}>;


export type FollowMutation = (
  { __typename?: 'Mutation' }
  & { follow?: Maybe<(
    { __typename?: 'LoggedUser' }
    & LoggedUserFragment
  )> }
);

export type GetMyFriendsTweetsMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type GetMyFriendsTweetsMutation = (
  { __typename?: 'Mutation' }
  & { getMyFriendsTweets?: Maybe<Array<Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )>>> }
);

export type GetTweetByUserIdMutationVariables = Exact<{
  _id: Scalars['String'];
}>;


export type GetTweetByUserIdMutation = (
  { __typename?: 'Mutation' }
  & { getTweetByUserID?: Maybe<Array<Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )>>> }
);

export type LikeMutationVariables = Exact<{
  _id?: Maybe<Scalars['String']>;
  token: Scalars['String'];
}>;


export type LikeMutation = (
  { __typename?: 'Mutation' }
  & { like?: Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )> }
);

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoggedUser' }
    & LoggedUserFragment
  )> }
);

export type NewTweetMutationVariables = Exact<{
  content?: Maybe<Scalars['String']>;
  token: Scalars['String'];
}>;


export type NewTweetMutation = (
  { __typename?: 'Mutation' }
  & { newTweet?: Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )> }
);

export type SaveUserMutationVariables = Exact<{
  userName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type SaveUserMutation = (
  { __typename?: 'Mutation' }
  & { saveUser?: Maybe<(
    { __typename?: 'LoggedUser' }
    & LoggedUserFragment
  )> }
);

export type UnfollowMutationVariables = Exact<{
  _id: Scalars['String'];
  unfollowingId: Scalars['String'];
  token: Scalars['String'];
}>;


export type UnfollowMutation = (
  { __typename?: 'Mutation' }
  & { unfollow?: Maybe<(
    { __typename?: 'LoggedUser' }
    & LoggedUserFragment
  )> }
);

export type GetTweetByIdQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type GetTweetByIdQuery = (
  { __typename?: 'Query' }
  & { getTweetById?: Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )> }
);

export type GetTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsQuery = (
  { __typename?: 'Query' }
  & { getTweets?: Maybe<Array<Maybe<(
    { __typename?: 'Tweet' }
    & TweetFragment
  )>>> }
);

export type GetUserByIdQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'Query' }
  & { getUserById?: Maybe<(
    { __typename?: 'UserAndTweets' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )>, tweets?: Maybe<Array<Maybe<(
      { __typename?: 'Tweet' }
      & TweetFragment
    )>>> }
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>>> }
);

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
        return Apollo.useMutation<CreateRandomUserMutation, CreateRandomUserMutationVariables>(CreateRandomUserDocument, baseOptions);
      }
export type CreateRandomUserMutationHookResult = ReturnType<typeof useCreateRandomUserMutation>;
export type CreateRandomUserMutationResult = Apollo.MutationResult<CreateRandomUserMutation>;
export type CreateRandomUserMutationOptions = Apollo.BaseMutationOptions<CreateRandomUserMutation, CreateRandomUserMutationVariables>;
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
        return Apollo.useMutation<DeleteTweetMutation, DeleteTweetMutationVariables>(DeleteTweetDocument, baseOptions);
      }
export type DeleteTweetMutationHookResult = ReturnType<typeof useDeleteTweetMutation>;
export type DeleteTweetMutationResult = Apollo.MutationResult<DeleteTweetMutation>;
export type DeleteTweetMutationOptions = Apollo.BaseMutationOptions<DeleteTweetMutation, DeleteTweetMutationVariables>;
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
        return Apollo.useMutation<DeslikeMutation, DeslikeMutationVariables>(DeslikeDocument, baseOptions);
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
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, baseOptions);
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
        return Apollo.useMutation<GetMyFriendsTweetsMutation, GetMyFriendsTweetsMutationVariables>(GetMyFriendsTweetsDocument, baseOptions);
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
        return Apollo.useMutation<GetTweetByUserIdMutation, GetTweetByUserIdMutationVariables>(GetTweetByUserIdDocument, baseOptions);
      }
export type GetTweetByUserIdMutationHookResult = ReturnType<typeof useGetTweetByUserIdMutation>;
export type GetTweetByUserIdMutationResult = Apollo.MutationResult<GetTweetByUserIdMutation>;
export type GetTweetByUserIdMutationOptions = Apollo.BaseMutationOptions<GetTweetByUserIdMutation, GetTweetByUserIdMutationVariables>;
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
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, baseOptions);
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
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
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
        return Apollo.useMutation<NewTweetMutation, NewTweetMutationVariables>(NewTweetDocument, baseOptions);
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
        return Apollo.useMutation<SaveUserMutation, SaveUserMutationVariables>(SaveUserDocument, baseOptions);
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
        return Apollo.useMutation<UnfollowMutation, UnfollowMutationVariables>(UnfollowDocument, baseOptions);
      }
export type UnfollowMutationHookResult = ReturnType<typeof useUnfollowMutation>;
export type UnfollowMutationResult = Apollo.MutationResult<UnfollowMutation>;
export type UnfollowMutationOptions = Apollo.BaseMutationOptions<UnfollowMutation, UnfollowMutationVariables>;
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
export function useGetTweetByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables>) {
        return Apollo.useQuery<GetTweetByIdQuery, GetTweetByIdQueryVariables>(GetTweetByIdDocument, baseOptions);
      }
export function useGetTweetByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetByIdQuery, GetTweetByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetTweetByIdQuery, GetTweetByIdQueryVariables>(GetTweetByIdDocument, baseOptions);
        }
export type GetTweetByIdQueryHookResult = ReturnType<typeof useGetTweetByIdQuery>;
export type GetTweetByIdLazyQueryHookResult = ReturnType<typeof useGetTweetByIdLazyQuery>;
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
        return Apollo.useQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, baseOptions);
      }
export function useGetTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
          return Apollo.useLazyQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, baseOptions);
        }
export type GetTweetsQueryHookResult = ReturnType<typeof useGetTweetsQuery>;
export type GetTweetsLazyQueryHookResult = ReturnType<typeof useGetTweetsLazyQuery>;
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
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, baseOptions);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
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
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;