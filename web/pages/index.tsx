import { useEffect } from "react";
import { connect } from "react-redux";
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
import { actions } from "~store";
import { Page, Column } from "~components/template";

const userAuthentication = {
  email: "sergio@gmail.com",
  password: "S3nh4!@#",
};

type HomePageType = Partial<LoggedUser>;

function HomePage(props: HomePageType): JSX.Element {
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
      actions.setUserNameAction({
        userName,
        name,
        email,
        token,
        _id,
      });
    })();
  }, []);

  const onSubmitNewTweet = async (content) => {
    await fn({
      variables: {
        token: props.token,
        content,
      },
    });
    refetch();
  };

  const onDeleteTweetHandler = async (_id: string) => {
    await onDeleteTweet({
      variables: {
        _id,
        token: props.token,
      },
    });
    refetch();
  };

  const onLikeTweetHandler = async (_id: string) => {
    await onLikeTweet({
      variables: {
        _id,
        token: props.token,
      },
    });
    refetch();
  };

  const onDeslikeTweetHandler = async (_id: string) => {
    await onDeslikeTweet({
      variables: {
        _id,
        token: props.token,
      },
    });
    refetch();
  };

  return (
    <Page>
      <Column />
      <Column>
        <Home
          onLikeTweetHandler={onLikeTweetHandler}
          onDeslikeTweetHandler={onDeslikeTweetHandler}
          onDeleteTweet={onDeleteTweetHandler}
          onSubmitNewTweet={onSubmitNewTweet}
          tweets={data?.getTweets}
        />
      </Column>
      <Column />
    </Page>
  );
}

export default connect(({ user }) => user)(HomePage);
