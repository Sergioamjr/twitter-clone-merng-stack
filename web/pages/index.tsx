import { useEffect } from "react";
import { connect } from "react-redux";
import {
  useGetTweetsQuery,
  LoggedUser,
  useHasANewTweetSubscription,
} from "~graphql/generated/graphql";
import Auth from "~components/Authentication";
import Template from "~components/Template";
import Home from "~features/home";
import { TweetsStore } from "~store/tweets";
import { actions } from "~store";

type HomePageType = {
  user: Partial<LoggedUser>;
  tweets: TweetsStore;
};

function HomePage({ user, tweets }: HomePageType): JSX.Element {
  const { data, refetch, loading } = useGetTweetsQuery();
  const subscriptions = useHasANewTweetSubscription();

  useEffect(() => {
    if (subscriptions?.data?.hasANewTweet?.createdAt) {
      actions.addNewTweet();
    }
  }, [subscriptions?.data?.hasANewTweet?.createdAt]);

  const onResetTweetsCounter = () => {
    refetch();
    actions.resetTweetsCounter();
  };

  return (
    <Auth>
      <Template>
        <Home
          onResetTweetsCounter={onResetTweetsCounter}
          newTweets={tweets.newTweets}
          loading={loading}
          refetch={refetch}
          tweets={data?.getTweets}
          user={user}
        />
      </Template>
    </Auth>
  );
}

export default connect(({ user, tweets }: HomePageType, props) => ({
  user,
  tweets,
  ...props,
}))(HomePage);
