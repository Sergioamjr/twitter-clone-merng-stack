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
      try {
        const auth = await login({
          variables: {
            email: process.env.NEXT_PUBLIC_EMAIL,
            password: process.env.NEXT_PUBLIC_PASSWORD,
          },
        });
        const {
          data: {
            login: { userName, name, email, token, _id, friends },
          },
        } = auth;

        actions.setUserNameAction({
          userName,
          name,
          email,
          token,
          _id,
          friends,
        });
        setIsLoading(false);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <>{children}</>;
}
