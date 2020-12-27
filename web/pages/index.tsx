import { connect } from "react-redux";
import { useGetTweetsQuery, LoggedUser } from "~graphql/generated/graphql";
import Home from "~features/home";

import { Page, Column } from "~components/template";
import Authentication from "~features/Authentication";

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
