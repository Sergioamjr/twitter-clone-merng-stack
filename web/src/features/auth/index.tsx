import { useEffect, ReactNode, useState } from "react";
import { useLoginMutation } from "~graphql/generated/graphql";
import { actions } from "~store";

type AuthProps = {
  children: ReactNode;
};

export default function Auth({ children }: AuthProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [login] = useLoginMutation();

  useEffect(() => {
    (async () => {
      const auth = await login({
        variables: {
          email: process.env.NEXT_PUBLIC_EMAIL,
          password: process.env.NEXT_PUBLIC_PASSWORD,
        },
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
