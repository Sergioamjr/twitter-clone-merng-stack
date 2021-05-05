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
import GoBackBar from "~components/GoBackBar";
import LoadNewTweets from "~components/LoadNewTweets";

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
        <LoadNewTweets
          label={`${newTweets} new tweet${newTweets > 1 ? "s" : ""}`}
          onClick={() => onResetTweetsCounter()}
        />
      )}
      {tweets.length && (
        <TweetCard
          _id=""
          avatarColor="#d03c3c"
          name="Sérgio Júnior"
          isPinned
          disableActions
          userName="sergio_amjr"
          content={
            <span>
              Hey, seja bem vindo ao meu clone do Twitter. Ele foi criado como
              caso de estudo de tecnologias como React, GraphQL, TS, Node. Toda
              documentação e código do projeto encontra-se{" "}
              <a
                href="https://github.com/Sergioamjr/twitter-clone/"
                target="_blank"
                rel="noreferrer"
              >
                nesse repositório.
              </a>{" "}
            </span>
          }
          createdAt="2021-05-01T23:57:33.291Z"
          likedBy={[]}
          onLikeTweet={onLikeTweetHandler}
          onDeslikeTweet={onDeslikeTweetHandler}
          onDeleteTweet={onDeleteTweetHandler}
        />
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
