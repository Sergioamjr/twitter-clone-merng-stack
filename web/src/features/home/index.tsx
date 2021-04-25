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
import { Column } from "~components/Template";
import { Loading } from "~icons";
import Button from "~components/Button";
import GoBackBar from "~components/GoBackBar";

export type HomeProps = {
  onResetTweetsCounter: () => void;
  newTweets: number;
  tweets?: Tweet[];
  user: LoggedUser;
  loading: boolean;
  refetch: () => void;
};

export default function Home({
  onResetTweetsCounter,
  tweets = [],
  newTweets,
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

  const onSubmitNewTweetHandler = async (content: string) => {
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
      <GoBackBar woBackBtn type="Home" />
      <TweetInput
        userName={user.name}
        onSubmitNewTweet={onSubmitNewTweetHandler}
      />
      {loading && <Loading />}
      {!!newTweets && (
        <Button
          style={{
            margin: "0 auto 20px",
          }}
          onClick={() => onResetTweetsCounter()}
        >
          {newTweets} new tweet{newTweets > 1 ? "s" : ""}
        </Button>
      )}
      {tweets.map(({ _id, likedBy, ...tweet }) => {
        return (
          <TweetCard
            {...tweet}
            key={_id}
            _id={_id}
            likedBy={likedBy}
            onLikeTweet={onLikeTweetHandler}
            onDeslikeTweet={onDeslikeTweetHandler}
            onDeleteTweet={onDeleteTweetHandler}
            haveLikedTweet={likedBy.includes(user._id)}
          />
        );
      })}
    </Column>
  );
}
