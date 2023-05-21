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
    try {
      const {
        data: { createRandomUser },
      } = await onCreateRandomUser();
      setOnLocalStorage(createRandomUser);
      actions.setUserNameAction(createRandomUser);
      setShowIntro(true);
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  const onCompleteAnimation = () => setShowIntro(false);

  useEffect(() => {
    const user = getFromLocalStorage();
    if (!user) {
      fetchFakeUser();
    } else {
      actions.setUserNameAction(user);
      setIsLoading(false);
    }
  }, []);

  if (showIntro) {
    return <Intro onCompleteAnimation={onCompleteAnimation} />;
  }

  if (isLoading) {
    return <Loading />;
  }
  return <>{children}</>;
}
