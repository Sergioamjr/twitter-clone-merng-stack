import TweetCard from "~components/Tweet";
import {
  Tweet,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  LoggedUser,
} from "~graphql/generated/graphql";
import { Column } from "~components/template";

export type UserProps = {
  tweets?: Tweet[];
  user: Partial<LoggedUser>;
  refetch: () => void;
};

export default function User({
  tweets = [],
  user,
  refetch,
}: UserProps): JSX.Element {
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();

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

  const onAddAsFriendHandler = () => {
    console.log("Adiciona como amigo");
  };

  return (
    <Column>
      <button onClick={onAddAsFriendHandler}>Adicionar como amigo</button>
      {tweets.map(({ _id, content, userName, name, likedBy }) => {
        return (
          <TweetCard
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
