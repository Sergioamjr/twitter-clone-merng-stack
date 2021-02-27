import { useEffect, useState } from "react";
import { useCreateRandomUserMutation } from "~graphql/generated/graphql";
import { actions } from "~store";
import Loading from "~components/Loading";
import { getFromLocalStorage, setOnLocalStorage } from "~utils";
import Intro from "~components/Intro";
import { WithChildren } from "~utils/types";

export default function Auth({ children }: WithChildren): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [onCreateRandomUser] = useCreateRandomUserMutation();

  const fetchFakeUser = async () => {
    const {
      data: { createRandomUser },
    } = await onCreateRandomUser();
    setOnLocalStorage(createRandomUser);
    actions.setUserNameAction(createRandomUser);
    setIsLoading(false);
  };

  useEffect(() => {
    if (showIntro) {
      setTimeout(() => {
        setShowIntro(false);
      }, 10000);
    }
  }, [showIntro]);

  useEffect(() => {
    const user = getFromLocalStorage();
    if (!user) {
      setShowIntro(true);
      fetchFakeUser();
    } else {
      actions.setUserNameAction(user);
      setIsLoading(false);
    }
  }, []);

  if (showIntro) {
    return <Intro />;
  }

  if (isLoading) {
    return <Loading />;
  }
  return <>{children}</>;
}
