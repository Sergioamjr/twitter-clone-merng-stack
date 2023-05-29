import { useRouter } from "next/router";
import {
  LoggedUser,
  Tweet as TweetType,
  Comment,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
  useNewCommentMutation,
  useDeslikeCommentMutation,
  useLikeCommentMutation,
  useDeleteCommentMutation,
} from "~graphql/generated/graphql";
import Tweet from "~components/Tweet";
import GoBackBar from "~components/GoBackBar";
import UserNotFound from "~components/UserNotFound";
import TweetInput from "~components/TweetInput";
import { omit } from "~utils";

type TweetPageProps = {
  tweet: TweetType;
  comments?: Comment[];
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
  const [onSubmitNewComment] = useNewCommentMutation();
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onDeleteComment] = useDeleteCommentMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();
  const [onLikeComment] = useLikeCommentMutation();
  const [onDeslikeComment] = useDeslikeCommentMutation();

  const onLikeCommentHandler = async (_id: string) => {
    await onLikeComment({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
  };

  const onDeslikeCommentHandler = async (_id: string) => {
    await onDeslikeComment({
      variables: {
        _id,
        token: user.token,
      },
    });
    refetch();
  };

  const onSubmitNewCommentHandler = async (content: string) => {
    await onSubmitNewComment({
      variables: {
        token: user.token,
        content,
        originalTweet: tweet._id,
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
    router.push("/");
  };

  const onDeleteCommentHandler = async (_id: string) => {
    await onDeleteComment({
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
    <>
      <GoBackBar type="Tweet" />
      {tweet ? (
        <>
          <Tweet
            onLikeTweet={onLikeTweetHandler}
            onDeslikeTweet={onDeslikeTweetHandler}
            onDeleteTweet={onDeleteTweetHandler}
            showCommentLine={!!tweet.commentsCounter}
            haveLikedTweet={tweet?.likedBy.includes(user._id)}
            {...tweet}
          />

          {comments.map((comment) => {
            const omittedProperties = omit(comment, [
              "originalTweet",
              "__typename",
            ]);
            return (
              <Tweet
                haveLikedTweet={comment?.likedBy.includes(user._id)}
                onLikeTweet={onLikeCommentHandler}
                onDeslikeTweet={onDeslikeCommentHandler}
                onDeleteTweet={onDeleteCommentHandler}
                key={comment._id}
                isComment
                {...Object.assign({}, omittedProperties)}
              />
            );
          })}
          <TweetInput
            isComment
            userName={user.name}
            onSubmitNewTweet={onSubmitNewCommentHandler}
          />
        </>
      ) : (
        <UserNotFound type="Tweet" />
      )}
    </>
  );
}
