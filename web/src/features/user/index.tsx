import TweetCard from "~components/Tweet";
import {
  Tweet,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  useAddToFriendsMutation,
  User as UserType,
  LoggedUser,
} from "~graphql/generated/graphql";
import { Column } from "~components/template";
import UserIntro from "~components/userIntro";

export type UserProps = {
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
}: UserProps): JSX.Element {
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();
  const [onAddToFriends] = useAddToFriendsMutation();

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

  const onFollowHandler = (_id) => {
    onAddToFriends({
      variables: {
        newFriendId: _id,
        _id: user._id,
        token: user.token,
      },
    });
  };

  return (
    <Column>
      <UserIntro {...queriedUser} onFollowHandler={onFollowHandler} />
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
    </Column>
  );
}
