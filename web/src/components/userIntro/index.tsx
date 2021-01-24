import * as Styles from "./style";
import { Tweet } from "~graphql/generated/graphql";
import { getNameInitials } from "~utils";

type UserIntroProps = Pick<Tweet, "userName" | "_id" | "name"> & {
  onFollowHandler: (_id: string) => void;
  onUnfollowHandler: (_id: string) => void;
  areFriends: boolean;
  hideButton: boolean;
  disabledButton?: boolean;
};

export default function UserIntro({
  userName,
  _id,
  name,
  hideButton,
  onUnfollowHandler,
  areFriends,
  onFollowHandler,
  disabledButton,
}: UserIntroProps): JSX.Element {
  return (
    <div>
      <Styles.Header />
      <Styles.Content>
        <Styles.Spacer>
          <Styles.Avatar>{getNameInitials(name)}</Styles.Avatar>
          {areFriends && !hideButton && (
            <Styles.Action
              disabled={disabledButton}
              onClick={() => onUnfollowHandler(_id)}
            >
              Unfollow
            </Styles.Action>
          )}

          {!areFriends && !hideButton && (
            <Styles.Action
              disabled={disabledButton}
              onClick={() => onFollowHandler(_id)}
            >
              Follow
            </Styles.Action>
          )}
        </Styles.Spacer>
        <Styles.UserName>{name}</Styles.UserName>
        <Styles.UserAlias>@{userName}</Styles.UserAlias>
      </Styles.Content>
    </div>
  );
}
