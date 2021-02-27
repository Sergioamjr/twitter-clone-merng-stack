import { memo } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import Button from "~components/button";
import { formatDistance, format } from "date-fns";
import { Heart, Bin, Comment, Share } from "~icons";
import * as S from "./styled";
import { colors } from "~theme";
import { Tweet as TweetType, User } from "~graphql/generated/graphql";
import { getNameInitials } from "~utils";

export type TweetProps = Required<TweetType> & {
  isComment?: boolean;
  showCommentLine?: boolean;
  haveLikedTweet: boolean;
  onLikeTweetHandler: (id: string) => void;
  onDeleteTweet: (id: string) => void;
  onDeslikeTweetHandler: (id: string) => void;
  user?: Pick<User, "_id">;
};

const Tweet = ({
  isComment,
  _id,
  onDeleteTweet,
  onLikeTweetHandler,
  likedBy,
  haveLikedTweet,
  onDeslikeTweetHandler,
  name,
  userName,
  showCommentLine,
  content,
  authorId,
  user,
  createdAt,
  avatarColor,
  commentsCounter,
}: TweetProps): JSX.Element => {
  const router = useRouter();
  const dateDesktop = formatDistance(new Date(createdAt), new Date());
  const dateMobile = format(new Date(createdAt), "MMM/yyyy");

  const onClickHandler = () => {
    if (isComment) return false;
    router.push(`/tweet/${_id}`);
  };

  const onClickInside = (e) => {
    e.stopPropagation();
  };

  const onLikeTweetHandler_ = (e) => {
    e.stopPropagation();
    haveLikedTweet ? onDeslikeTweetHandler(_id) : onLikeTweetHandler(_id);
  };

  const onDeleteTweetHandler = (e) => {
    e.stopPropagation();
    onDeleteTweet(_id);
  };

  const onShareHandler = async (e) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: "MDN",
          text: "Aprenda desenvolvimento web no MDN!",
          url: "https://developer.mozilla.org",
        });
        return false;
      }
      console.log("copiado");
    } catch (err) {
      console.log("copiado");
    }
  };

  return (
    <S.Card tabIndex={0} onClick={onClickHandler}>
      <S.Avatar
        isComment={isComment || showCommentLine}
        onClick={onClickInside}
        href={`/user/${authorId}`}
        tabIndex={0}
        avatarColor={avatarColor}
      >
        {getNameInitials(userName)}
      </S.Avatar>
      <S.TweetContent>
        <S.Header>
          <S.Name
            onClick={onClickInside}
            href={`/user/${authorId}`}
            tabIndex={0}
          >
            {name}
          </S.Name>
          <S.Username>
            @{userName} · <S.ShowOnMobile>{dateMobile}</S.ShowOnMobile>
            <S.ShowOnDesktop>{dateDesktop}</S.ShowOnDesktop>
          </S.Username>
        </S.Header>
        <S.Content>
          <S.Text>{content}</S.Text>
        </S.Content>
        <S.Footer>
          {user._id !== authorId && (
            <S.ActionBtnGroup>
              <Button
                rounded
                variant="danger"
                aria-label="Like"
                onClick={onLikeTweetHandler_}
              >
                <Heart
                  width={20}
                  color={haveLikedTweet ? colors.red : colors.lightLighten}
                />
              </Button>
              {!!likedBy.length && (
                <S.HowManyLikes>{likedBy.length}</S.HowManyLikes>
              )}
            </S.ActionBtnGroup>
          )}
          {user._id === authorId && (
            <S.ActionBtnGroup>
              <Button
                rounded
                variant="danger"
                aria-label="Exclude"
                onClick={onDeleteTweetHandler}
              >
                <Bin width={20} />
              </Button>
            </S.ActionBtnGroup>
          )}
          {!isComment && (
            <S.ActionBtnGroup>
              <Button variant="blue" rounded>
                <Comment color={colors.lightLighten} />
              </Button>
              <S.HowManyLikes>{commentsCounter}</S.HowManyLikes>
            </S.ActionBtnGroup>
          )}
          {!isComment && (
            <Button variant="green" rounded onClick={onShareHandler}>
              <Share />
            </Button>
          )}
        </S.Footer>
      </S.TweetContent>
    </S.Card>
  );
};

const MemorizedTweet = memo(Tweet);

export default connect(({ user }, props) => ({ user, ...props }))(
  MemorizedTweet
);
