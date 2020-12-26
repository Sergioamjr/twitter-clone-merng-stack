import TweetCard from "~components/Tweet";
import {
  Tweet,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  LoggedUser,
} from "~generated/graphql";
import { Column } from "~components/template";

export type UserProps = {
  tweets?: Tweet[];
  user: Partial<LoggedUser>;
};

export default function User({ tweets = [], user }: UserProps): JSX.Element {
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
  };

  const onLikeTweetHandler = async (_id: string) => {
    await onLikeTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
  };

  const onDeslikeTweetHandler = async (_id: string) => {
    await onDeslikeTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
  };

  return (
    <Column>
      {tweets.map(({ _id, content, userName, name, likedBy }) => {
        return (
          <TweetCard
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
