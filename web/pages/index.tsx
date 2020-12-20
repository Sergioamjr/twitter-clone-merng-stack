import { useEffect, useState } from "react";
import {
  useGetTweetsQuery,
  useLoginMutation,
  useNewTweetMutation,
  useDeleteTweetMutation,
} from "../src/generated/graphql";
import Home from "./../src/features/home";
import { LoggedUser } from "./../src/generated/graphql";

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

  return (
    <Home
      onDeleteTweet={onDeleteTweetHandler}
      onSubmitNewTweet={onSubmitNewTweet}
      tweets={data?.getTweets}
    />
  );
}
