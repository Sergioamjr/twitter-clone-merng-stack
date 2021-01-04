import TweetCard from "~components/Tweet";
import {
  Tweet,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  User as UserType,
} from "~graphql/generated/graphql";
import { Column } from "~components/template";
import UserIntro from "~components/userIntro";

export type UserProps = {
  tweets?: Tweet[];
  user: Partial<UserType>;
  refetch: () => void;
  token?: string;
};

export default function User({
  tweets = [],
  user,
  refetch,
  token,
}: UserProps): JSX.Element {
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();

  const onDeleteTweetHandler = async (_id: string) => {
    await onDeleteTweet({
      variables: {
        _id,
        token: token,
      },
    });
    refetch();
  };

  const onLikeTweetHandler = async (_id: string) => {
    await onLikeTweet({
      variables: {
        _id,
        token: token,
      },
    });
    refetch();
  };

  const onDeslikeTweetHandler = async (_id: string) => {
    await onDeslikeTweet({
      variables: {
        _id,
        token: token,
      },
    });
    refetch();
  };

  const onFollowHandler = (_id) => {
    console.log("Adiciona como amigo", _id);
  };

  return (
    <Column>
      <UserIntro {...user} onFollowHandler={onFollowHandler} />
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
