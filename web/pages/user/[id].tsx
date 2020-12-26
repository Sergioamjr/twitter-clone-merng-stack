import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Page, Column } from "~components/template";
import { useGetTweetByUserIdMutation } from "~generated/graphql";
import { LoggedUser } from "~generated/graphql";
import User from "~features/user";

type UserPageType = {
  user: Partial<LoggedUser>;
};

function UserPage({ user }: UserPageType): JSX.Element {
  const [tweets, setTweets] = useState([]);
  const [getUserTweets] = useGetTweetByUserIdMutation();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const response = await getUserTweets({
            variables: { _id: id as string },
          });
          setTweets(response.data.getTweetByUserID);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [id]);

  return (
    <Page>
      <Column />
      <Column>
        <User tweets={tweets} user={user} />
      </Column>
      <Column />
    </Page>
  );
}

export default connect(({ user }) => user)(UserPage);
