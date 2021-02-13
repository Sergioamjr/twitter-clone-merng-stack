import { useEffect, ReactNode, useState } from "react";
import { useCreateRandomUserMutation } from "~graphql/generated/graphql";
import { Loading } from "~icons";
import { actions } from "~store";
import * as Styled from "./styles";

type AuthProps = {
  children: ReactNode;
};

const KEY = "tww";
export default function Auth({ children }: AuthProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [onCreateRandomUser] = useCreateRandomUserMutation();

  const fetchFakeUser = async () => {
    const {
      data: { createRandomUser },
    } = await onCreateRandomUser();
    window.localStorage.setItem(KEY, JSON.stringify(createRandomUser));
    actions.setUserNameAction(createRandomUser);
    setIsLoading(false);
  };

  useEffect(() => {
    const user = localStorage.getItem(KEY);
    if (!user) {
      fetchFakeUser();
    } else {
      actions.setUserNameAction(JSON.parse(user));
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <Styled.LoadingWrapper>
        <Loading />
      </Styled.LoadingWrapper>
    );
  }
  return <>{children}</>;
}
