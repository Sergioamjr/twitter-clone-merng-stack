import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Page, Column } from "~components/template";
import {
  LoggedUser,
  useGetCommentsByTweetIdQuery,
  useGetTweetByIdQuery,
} from "~graphql/generated/graphql";
import Auth from "~features/auth";
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

  const refetchAll = () => {
    tweet.refetch();
    comments.refetch();
  };

  if (tweet.loading || comments.loading) {
    return <Loading />;
  }

  return (
    <Auth>
      <Page>
        <Column />
        <Column>
          <TweetPage
            refetch={refetchAll}
            user={user}
            tweet={tweet.data?.getTweetById}
            comments={comments.data?.getCommentsByTweetId}
          />
        </Column>
        <Column />
      </Page>
    </Auth>
  );
}

export default connect(({ user }: TweetPageType, props) => ({
  user,
  ...props,
}))(Tweet);
