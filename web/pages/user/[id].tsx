import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Page, Column } from "~components/PageTemplate";
import { LoggedUser, useGetUserByIdQuery } from "~graphql/generated/graphql";
import User from "~features/user";
import Auth from "~components/Authentication";
import Loading from "~components/Loading";

type UserPageType = {
  user: Partial<LoggedUser>;
};

function UserPage({ user }: UserPageType): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, refetch } = useGetUserByIdQuery({
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
          <User
            userNotFound={!loading && !data?.getUserById}
            refetch={refetch}
            tweets={data?.getUserById?.tweets}
            queriedUser={data?.getUserById?.user}
            user={user}
          />
        </Column>
        <Column />
      </Page>
    </Auth>
  );
}

export default connect(({ user }: UserPageType, props) => ({ user, ...props }))(
  UserPage
);
