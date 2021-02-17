import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  LoggedUser,
  Tweet as TweetType,
  Comment,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
} from "~graphql/generated/graphql";
import Tweet from "~components/Tweet";
import GoBackBar from "~components/GoBackBar";
import UserNotFound from "~components/UserNotFound";

type TweetPageProps = {
  tweet: TweetType;
  comments?: [Comment];
  refetch: () => void;
  user: Partial<LoggedUser>;
};

export default function TweetPage({
  user,
  tweet,
  refetch,
  comments,
}: TweetPageProps): JSX.Element {
  const router = useRouter();
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();

  const onDeleteTweetHandler = useCallback(async (_id: string) => {
    await onDeleteTweet({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
    router.push("/");
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
    <>
      <GoBackBar type="Tweet" />
      {tweet ? (
        <>
          <Tweet
            onLikeTweetHandler={onLikeTweetHandler}
            onDeslikeTweetHandler={onDeslikeTweetHandler}
            onDeleteTweet={onDeleteTweetHandler}
            user={user}
            haveLikedTweet={tweet?.likedBy.includes(user._id)}
            {...tweet}
          />
          {comments.map((comment) => (
            <Tweet key={comment._id} isComment {...comment} />
          ))}
        </>
      ) : (
        <UserNotFound type="Tweet" />
      )}
    </>
  );
}
