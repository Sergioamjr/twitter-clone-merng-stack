import { connect } from "react-redux";
import { useGetTweetsQuery, LoggedUser } from "~graphql/generated/graphql";
import Auth from "~features/auth";
import { Page, Column } from "~components/template";
import Home from "~features/home";

type HomePageType = {
  user: Partial<LoggedUser>;
};

function HomePage({ user }: HomePageType): JSX.Element {
  const { data, refetch } = useGetTweetsQuery();
  console.log(data?.getTweets);
  return (
    <Auth>
      <Page>
        <Column />
        <Column>
          <Home refetch={refetch} tweets={data?.getTweets} user={user} />
        </Column>
        <Column />
      </Page>
    </Auth>
  );
}

export default connect(({ user }, props) => ({ user, ...props }))(HomePage);
