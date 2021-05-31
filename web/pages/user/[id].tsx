import { useRouter } from "next/router";
import getUser from "~graphql/queries/get-users-by-id";
import { GetServerSideProps } from "next";
import { connect } from "react-redux";
import Template from "~components/Template";
import {
  LoggedUser,
  useGetUserByIdQuery,
  User,
  Tweet,
} from "~graphql/generated/graphql";
import UserView from "~features/user";
import Auth from "~components/Authentication";
import clientConfig from "client.config";
import { useEffect, useState } from "react";

type UserPageType = {
  user: Partial<LoggedUser>;
  queriedUser: User;
  tweets: Tweet[];
  userNotFound: boolean;
};

function UserPage({
  user,
  queriedUser: queriedUser_,
  tweets: tweets_,
  userNotFound,
}: UserPageType): JSX.Element {
  const [queriedUser, setQueriedUser] = useState(queriedUser_);
  const [tweets, setTweets] = useState(tweets_);

  const router = useRouter();
  const { id } = router.query;
  const { refetch, data } = useGetUserByIdQuery({
    variables: {
      _id: id as string,
    },
  });

  useEffect(() => {
    if (data?.getUserById?.tweets && data?.getUserById?.tweets) {
      setQueriedUser(data?.getUserById?.user);
      setTweets(data?.getUserById?.tweets);
    }
  }, [data?.getUserById?.user, data?.getUserById?.tweets]);

  return (
    <Auth>
      <Template>
        <UserView
          userNotFound={userNotFound}
          refetch={refetch}
          tweets={tweets}
          queriedUser={queriedUser}
          user={user}
        />
      </Template>
    </Auth>
  );
}

export default connect(({ user }: UserPageType, props) => ({ user, ...props }))(
  UserPage
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  const { data } = await clientConfig.query({
    query: getUser,
    variables: { _id: id },
  });

  return {
    props: {
      userNotFound: !data?.getUserById,
      tweets: data?.getUserById?.tweets || [],
      queriedUser: data?.getUserById?.user || {},
    },
  };
};
