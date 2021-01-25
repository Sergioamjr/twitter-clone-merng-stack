import { useEffect, ReactNode, useState } from "react";
import { useSaveUserMutation } from "~graphql/generated/graphql";
import { Loading } from "~icons";
import { actions } from "~store";
import * as Styled from "./styles";

type AuthProps = {
  children: ReactNode;
};

const getNewUser = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?inc=name,email,login,picture?nat=BR"
  );
  const { results } = await response.json();
  return {
    name: `${results[0].name.first} ${results[0].name.last}`,
    email: results[0].email,
    password: results[0].login.password,
    userName: results[0].login.username,
  };
};

const KEY = "tww";
export default function Auth({ children }: AuthProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [onSaveUser] = useSaveUserMutation();

  const fetchFakeUser = async () => {
    const user = await getNewUser();
    const {
      data: { saveUser },
    } = await onSaveUser({
      variables: user,
    });
    window.localStorage.setItem(KEY, JSON.stringify(saveUser));
    actions.setUserNameAction(saveUser);
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
