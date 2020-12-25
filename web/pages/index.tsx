import { useEffect, useState } from "react";
import {
  useGetTweetsQuery,
  useLoginMutation,
  useNewTweetMutation,
  useDeleteTweetMutation,
  useLikeMutation,
  useDeslikeMutation,
} from "~generated/graphql";
import Home from "~features/home";
import { LoggedUser } from "~generated/graphql";

const userAuthentication = {
  email: "sergio@gmail.com",
  password: "S3nh4!@#",
};

export default function HomePage(): JSX.Element {
  const [user, setUser] = useState<Partial<LoggedUser>>({});
  const { data, refetch } = useGetTweetsQuery();
  const [fn] = useNewTweetMutation();
  const [login] = useLoginMutation();
  const [onDeleteTweet] = useDeleteTweetMutation();
  const [onLikeTweet] = useLikeMutation();
  const [onDeslikeTweet] = useDeslikeMutation();

  useEffect(() => {
    (async () => {
      const auth = await login({
        variables: userAuthentication,
      });
      const {
        data: {
          login: { userName, name, email, token, _id },
        },
      } = auth;
      setUser({ userName, name, email, token, _id });
    })();
  }, []);

  const onSubmitNewTweet = async (content) => {
    await fn({
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
    <Home
      onLikeTweetHandler={onLikeTweetHandler}
      onDeslikeTweetHandler={onDeslikeTweetHandler}
      onDeleteTweet={onDeleteTweetHandler}
      onSubmitNewTweet={onSubmitNewTweet}
      tweets={data?.getTweets}
    />
  );
}
