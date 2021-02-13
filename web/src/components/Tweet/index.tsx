import { memo } from "react";
import { connect } from "react-redux";
import { formatDistance } from "date-fns";
import { Heart, Bin } from "~icons";
import * as S from "./styled";
import { colors } from "~theme";
import { Tweet as TweetType, User } from "~graphql/generated/graphql";
import { getNameInitials } from "~utils";

export type TweetProps = Required<TweetType> & {
  haveLikedTweet: boolean;
  onLikeTweetHandler: (id: string) => void;
  onDeleteTweet: (id: string) => void;
  onDeslikeTweetHandler: (id: string) => void;
  user?: Pick<User, "_id">;
  showLikeButton: boolean;
};

const Tweet = ({
  onDeleteTweet,
  onLikeTweetHandler,
  likedBy,
  haveLikedTweet,
  onDeslikeTweetHandler,
  name,
  userName,
  content,
  authorId,
  user,
  showLikeButton,
  createdAt,
}: TweetProps): JSX.Element => {
  return (
    <S.Card tabIndex={0}>
      <S.Avatar>{getNameInitials(userName)}</S.Avatar>
      <div>
        <S.Header>
          <S.Name href={`/user/${authorId}`} tabIndex={0}>
            {name}
          </S.Name>
          <S.Username>@{userName}</S.Username>
          <S.Username>
            - {formatDistance(new Date(createdAt), new Date())}
          </S.Username>
        </S.Header>
        <S.Content>
          <S.Text>{content}</S.Text>
        </S.Content>
        <S.Footer>
          {showLikeButton && (
            <S.ActionBtnGroup>
              <S.ActionBtn
                aria-label="Like"
                onClick={
                  haveLikedTweet ? onDeslikeTweetHandler : onLikeTweetHandler
                }
              >
                <Heart
                  width={20}
                  color={haveLikedTweet ? colors.red : colors.lightLighten}
                />
              </S.ActionBtn>
              {!!likedBy.length && (
                <S.HowManyLikes>{likedBy.length}</S.HowManyLikes>
              )}
            </S.ActionBtnGroup>
          )}
          {user._id === authorId && (
            <S.ActionBtn aria-label="Exclude" onClick={onDeleteTweet}>
              <Bin width={20} />
            </S.ActionBtn>
          )}
        </S.Footer>
      </div>
    </S.Card>
  );
};

const MemorizedTweet = memo(Tweet);

export default connect(({ user }, props) => ({ user, ...props }))(
  MemorizedTweet
);
