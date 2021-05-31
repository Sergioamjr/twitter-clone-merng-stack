import { useRouter } from "next/router";
import { connect } from "react-redux";
import Template from "~components/Template";
import {
  LoggedUser,
  useGetCommentsByTweetIdQuery,
  useGetTweetByIdQuery,
} from "~graphql/generated/graphql";
import Auth from "~components/Authentication";
import Loading from "~components/Loading";
import TweetPage from "~features/tweet";

type TweetPageType = {
  user: Partial<LoggedUser>;
};

function Tweet({ user }: TweetPageType): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const tweet = useGetTweetByIdQuery({
    variables: {
      _id: id as string,
    },
  });

  const comments = useGetCommentsByTweetIdQuery({
    variables: {
      _id: id as string,
    },
  });

  console.log(tweet);

  const refetchAll = () => {
    tweet.refetch();
    comments.refetch();
  };

  if (tweet.loading || comments.loading) {
    return <Loading />;
  }

  return (
    <Auth>
      <Template>
        <TweetPage
          refetch={refetchAll}
          user={user}
          tweet={tweet.data?.getTweetById}
          comments={comments.data?.getCommentsByTweetId}
        />
      </Template>
    </Auth>
  );
}

export default connect(({ user }: TweetPageType, props) => ({
  user,
  ...props,
}))(Tweet);
