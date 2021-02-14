import * as Styles from "./style";
import { User } from "~graphql/generated/graphql";
import { getNameInitials } from "~utils";

type UserIntroProps = Omit<User, "email"> & {
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
  following,
  followers,
  hideButton,
  onUnfollowHandler,
  areFriends,
  onFollowHandler,
  disabledButton,
  color,
}: UserIntroProps): JSX.Element {
  return (
    <div>
      <Styles.Header />
      <Styles.Content>
        <Styles.Spacer>
          <Styles.Avatar avatarColor={color}>
            {getNameInitials(userName)}
          </Styles.Avatar>
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
        <div>
          <Styles.UserName>{name}</Styles.UserName>
          <Styles.UserAlias>@{userName}</Styles.UserAlias>
        </div>
        <Styles.FollowersInfo>
          <Styles.Counter>{following.length}</Styles.Counter>
          <Styles.Followers>Following</Styles.Followers>

          <Styles.Counter>{followers.length}</Styles.Counter>
          <Styles.Followers>Followers</Styles.Followers>
        </Styles.FollowersInfo>
      </Styles.Content>
    </div>
  );
}
