import TweetCard from "~components/Tweet";
import {
  Tweet,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  useFollowMutation,
  User as UserType,
  LoggedUser,
  useUnfollowMutation,
} from "~graphql/generated/graphql";
import { Column } from "~components/PageTemplate";
import UserIntro from "~components/UserIntro";
import { actions } from "~store";
import GoBackBar from "~components/GoBackBar";
import UserNotFound from "~components/UserNotFound";

export type UserProps = {
  userNotFound: boolean;
  tweets?: Tweet[];
  queriedUser: UserType;
  refetch: () => void;
  user: Partial<LoggedUser>;
};

export default function User({
  tweets = [],
  queriedUser,
  refetch,
  user,
  userNotFound,
}: UserProps): JSX.Element {
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();
  const [onFollow, { loading: followLoading }] = useFollowMutation();
  const [onUnfollow, { loading: unfollowLoading }] = useUnfollowMutation();

  const onDeleteTweetHandler = async (_id: string) => {
    await onDeleteTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
  };

  const onLikeTweetHandler = async (_id: string) => {
    await onLikeTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
  };

  const onDeslikeTweetHandler = async (_id: string) => {
    await onDeslikeTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
  };

  const onFollowHandler = async (_id: string) => {
    const { data } = await onFollow({
      variables: {
        followingId: _id,
        _id: user._id,
        token: user.token,
      },
    });

    actions.setUserNameAction({
      followers: data.follow.followers,
      following: data.follow.following,
    });
    refetch();
  };

  const onUnfollowHandler = async (_id: string) => {
    const { data } = await onUnfollow({
      variables: {
        unfollowingId: _id,
        _id: user._id,
        token: user.token,
      },
    });
    refetch();

    actions.setUserNameAction({
      followers: data.unfollow.followers,
      following: data.unfollow.following,
    });
  };
  const areFriends = user.following.includes(queriedUser?._id);
  const hideButton = user._id === queriedUser?._id;

  return (
    <Column>
      <GoBackBar type={queriedUser?.name ?? ""} />
      {userNotFound ? (
        <UserNotFound type="User" />
      ) : (
        <>
          <UserIntro
            {...queriedUser}
            hideButton={hideButton}
            areFriends={areFriends}
            onFollowHandler={onFollowHandler}
            onUnfollowHandler={onUnfollowHandler}
            disabledButton={followLoading || unfollowLoading}
          />
          {tweets.map(
            ({
              _id,
              content,
              userName,
              name,
              likedBy,
              authorId,
              createdAt,
              avatarColor,
            }) => {
              return (
                <TweetCard
                  avatarColor={avatarColor}
                  createdAt={createdAt}
                  authorId={authorId}
                  haveLikedTweet={likedBy.includes(user._id)}
                  onLikeTweet={() => onLikeTweetHandler(_id)}
                  onDeslikeTweet={() => onDeslikeTweetHandler(_id)}
                  onDeleteTweet={() => onDeleteTweetHandler(_id)}
                  key={_id}
                  name={name}
                  userName={userName}
                  content={content}
                  _id={_id}
                  likedBy={likedBy}
                />
              );
            }
          )}
        </>
      )}
    </Column>
  );
}
