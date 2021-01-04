import * as Styles from "./style";
import { Tweet } from "~graphql/generated/graphql";

type UserIntroProps = Pick<Tweet, "userName" | "_id" | "name"> & {
  onFollowHandler: (_id: string) => void;
};

export default function UserIntro({
  userName,
  _id,
  name,
  onFollowHandler,
}: UserIntroProps): JSX.Element {
  return (
    <div>
      <Styles.Header />
      <Styles.Content>
        <Styles.Spacer>
          <Styles.Avatar>SJ</Styles.Avatar>
          <Styles.Action onClick={() => onFollowHandler(_id)}>
            Follow
          </Styles.Action>
        </Styles.Spacer>
        <Styles.UserName>{name}</Styles.UserName>
        <Styles.UserAlias>@{userName}</Styles.UserAlias>
      </Styles.Content>
    </div>
  );
}
