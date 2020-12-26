import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Page, Column } from "~components/template";
import {
  useGetTweetByUserIdMutation,
  LoggedUser,
} from "~graphql/generated/graphql";
import User from "~features/user";
import Authentication from "~features/Authentication";

type UserPageType = {
  user: Partial<LoggedUser>;
};

function UserPage({ user }: UserPageType): JSX.Element {
  const [tweets, setTweets] = useState([]);
  const [getUserTweets] = useGetTweetByUserIdMutation();
  const router = useRouter();
  const { id } = router.query;

  const fetch = async () => {
    try {
      const response = await getUserTweets({
        variables: { _id: id as string },
      });
      setTweets(response.data.getTweetByUserID);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      fetch();
    }
  }, [id]);

  return (
    <Authentication>
      <Page>
        <Column />
        <Column>
          <User refetch={fetch} tweets={tweets} user={user} />
        </Column>
        <Column />
      </Page>
    </Authentication>
  );
}

export default connect(({ user }, props) => ({ user, ...props }))(UserPage);
