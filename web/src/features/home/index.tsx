import { useCallback } from "react";
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

export type HomeProps = {
  tweets?: Tweet[];
  user: LoggedUser;
  refetch: () => void;
};

export default function Home({
  tweets = [],
  user,
  refetch,
}: HomeProps): JSX.Element {
  const [onSubmitNewTweet] = useNewTweetMutation();
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();

  const onSubmitNewTweetHandler = useCallback(async (content) => {
    await onSubmitNewTweet({
      variables: {
        token: user.token,
        content,
      },
    });
    refetch();
  }, []);

  const onDeleteTweetHandler = useCallback(async (_id: string) => {
    await onDeleteTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
  }, []);

  const onLikeTweetHandler = useCallback(async (_id: string) => {
    await onLikeTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
  }, []);

  const onDeslikeTweetHandler = useCallback(async (_id: string) => {
    await onDeslikeTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
  }, []);

  return (
    <Column>
      <TweetInput
        userName={user.name}
        onSubmitNewTweet={onSubmitNewTweetHandler}
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
          console.log("avatarColor", avatarColor);
          return (
            <TweetCard
              avatarColor={avatarColor}
              createdAt={createdAt}
              onLikeTweetHandler={() => onLikeTweetHandler(_id)}
              onDeslikeTweetHandler={() => onDeslikeTweetHandler(_id)}
              onDeleteTweet={() => onDeleteTweetHandler(_id)}
              haveLikedTweet={likedBy.includes(user._id)}
              key={_id}
              name={name}
              userName={userName}
              content={content}
              _id={_id}
              likedBy={likedBy}
              authorId={authorId}
            />
          );
        }
      )}
    </Column>
  );
}
