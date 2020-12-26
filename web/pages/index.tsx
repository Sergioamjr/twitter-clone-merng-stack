import { useEffect } from "react";
import { connect } from "react-redux";
import {
  useGetTweetsQuery,
  useLoginMutation,
  LoggedUser,
} from "~generated/graphql";
import Home from "~features/home";
import { actions } from "~store";
import { Page, Column } from "~components/template";

const userAuthentication = {
  email: "sergio@gmail.com",
  password: "S3nh4!@#",
};

type HomePageType = {
  user: Partial<LoggedUser>;
};

function HomePage({ user }: HomePageType): JSX.Element {
  const { data, refetch } = useGetTweetsQuery();
  const [login] = useLoginMutation();

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

  return (
    <Page>
      <Column />
      <Column>
        <Home refetch={refetch} tweets={data?.getTweets} user={user} />
      </Column>
      <Column />
    </Page>
  );
}

export default connect(({ user }, props) => ({ user, ...props }))(HomePage);
