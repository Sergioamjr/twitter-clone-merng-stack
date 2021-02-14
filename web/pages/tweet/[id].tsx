import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Page, Column } from "~components/template";
import { LoggedUser, useGetTweetByIdQuery } from "~graphql/generated/graphql";
import Auth from "~features/auth";
import Loading from "~components/Loading";
import TweetPage from "~features/tweet";

type TweetPageType = {
  user: Partial<LoggedUser>;
};

function Tweet({ user }: TweetPageType): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, refetch } = useGetTweetByIdQuery({
    variables: {
      _id: id as string,
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <Auth>
      <Page>
        <Column />
        <Column>
          <TweetPage refetch={refetch} user={user} tweet={data?.getTweetById} />
        </Column>
        <Column />
      </Page>
    </Auth>
  );
}

export default connect(({ user }, props) => ({ user, ...props }))(Tweet);
