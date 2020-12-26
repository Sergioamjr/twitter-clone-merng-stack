import { useEffect, ReactNode, useState } from "react";
import { useLoginMutation } from "~graphql/generated/graphql";
import { actions } from "~store";

const userAuthentication = {
  email: "sergio@gmail.com",
  password: "S3nh4!@#",
};

type AuthenticationProps = {
  children: ReactNode;
};

export default function Authentication({
  children,
}: AuthenticationProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <>{children}</>;
}
