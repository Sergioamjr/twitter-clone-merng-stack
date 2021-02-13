import TweetCard from "~components/Tweet";
import {
  Tweet,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  useAddToFriendsMutation,
  User as UserType,
  LoggedUser,
  useRemoveFromFriendsMutation,
} from "~graphql/generated/graphql";
import { Column } from "~components/template";
import UserIntro from "~components/userIntro";
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
  const [
    onAddToFriends,
    { loading: followLoading },
  ] = useAddToFriendsMutation();
  const [
    onRemoveFromFriends,
    { loading: unfollowLoading },
  ] = useRemoveFromFriendsMutation();

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

  const onFollowHandler = async (_id) => {
    const { data } = await onAddToFriends({
      variables: {
        newFriendId: _id,
        _id: user._id,
        token: user.token,
      },
    });

    actions.setUserNameAction({ friends: data.addToFriends.friends });
  };

  const onUnfollowHandler = async (_id) => {
    const { data } = await onRemoveFromFriends({
      variables: {
        friendId: _id,
        _id: user._id,
        token: user.token,
      },
    });

    actions.setUserNameAction({ friends: data.removeFromFriends.friends });
  };

  const areFriends = user.friends.includes(queriedUser?._id);
  const hideButton = user._id === queriedUser?._id;

  return (
    <Column>
      <GoBackBar />
      {userNotFound ? (
        <UserNotFound />
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
          {tweets.map(({ _id, content, userName, name, likedBy, authorId }) => {
            return (
              <TweetCard
                authorId={authorId}
                haveLikedTweet={likedBy.includes(user._id)}
                onLikeTweetHandler={() => onLikeTweetHandler(_id)}
                onDeslikeTweetHandler={() => onDeslikeTweetHandler(_id)}
                onDeleteTweet={() => onDeleteTweetHandler(_id)}
                key={_id}
                name={name}
                userName={userName}
                content={content}
                _id={_id}
                likedBy={likedBy}
              />
            );
          })}
        </>
      )}
    </Column>
  );
}
