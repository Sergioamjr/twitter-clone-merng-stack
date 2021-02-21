import { useEffect } from "react";
import TweetCard from "~components/Tweet";
import TweetInput from "~components/TweetInput";
import {
  useNewTweetMutation,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  Tweet,
  LoggedUser,
} from "~graphql/generated/graphql";
import { Column } from "~components/template";
import { Loading } from "~icons";

export type HomeProps = {
  tweets?: Tweet[];
  user: LoggedUser;
  loading: boolean;
  refetch: () => void;
};

export default function Home({
  tweets = [],
  user,
  refetch,
  loading,
}: HomeProps): JSX.Element {
  const [onSubmitNewTweet] = useNewTweetMutation();
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();

  useEffect(() => {
    refetch();
  }, []);

  const onSubmitNewTweetHandler = async (content) => {
    await onSubmitNewTweet({
      variables: {
        token: user.token,
        content,
      },
    });
    refetch();
  };

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

  return (
    <Column>
      <TweetInput
        userName={user.name}
        onSubmitNewTweet={onSubmitNewTweetHandler}
      />
      {loading && <Loading />}

      {tweets.map(({ _id, likedBy, ...tweet }) => {
        return (
          <TweetCard
            {...tweet}
            key={_id}
            _id={_id}
            likedBy={likedBy}
            onLikeTweetHandler={onLikeTweetHandler}
            onDeslikeTweetHandler={onDeslikeTweetHandler}
            onDeleteTweet={onDeleteTweetHandler}
            haveLikedTweet={likedBy.includes(user._id)}
          />
        );
      })}
    </Column>
  );
}
