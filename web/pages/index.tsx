import { connect } from "react-redux";
import { useGetTweetsQuery, LoggedUser } from "~graphql/generated/graphql";
import Home from "~features/home";
import Authentication from "~features/authentication";
import { Page, Column } from "~components/template";

type HomePageType = {
  user: Partial<LoggedUser>;
};

function HomePage({ user }: HomePageType): JSX.Element {
  const { data, refetch } = useGetTweetsQuery();

  return (
    <Authentication>
      <Page>
        <Column />
        <Column>
          <Home refetch={refetch} tweets={data?.getTweets} user={user} />
        </Column>
        <Column />
      </Page>
    </Authentication>
  );
}

export default connect(({ user }, props) => ({ user, ...props }))(HomePage);
