import { memo } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Pin } from "~icons";
import * as S from "./styled";
import { Tweet as TweetType, User } from "~graphql/generated/graphql";
import { getNameInitials } from "~utils";
import { RootStoreState } from "~store";
import { TweetHeader } from "./Header";
import { TweetFooter } from "./Footer";

export type TweetProps = Omit<TweetType, "content"> & {
  isComment?: boolean;
  showCommentLine?: boolean;
  haveLikedTweet?: boolean;
  onLikeTweet: (id: string) => void;
  onDeleteTweet: (id: string) => void;
  onDeslikeTweet: (id: string) => void;
  user?: Pick<User, "_id">;
  isPinned?: boolean;
  content?: React.ReactNode;
  disableActions?: boolean;
};

const Tweet = ({
  disableActions,
  isPinned,
  isComment,
  _id,
  onDeleteTweet,
  onLikeTweet,
  likedBy,
  haveLikedTweet,
  onDeslikeTweet,
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

  const onClickHandler = () => {
    if (isComment || disableActions) return false;
    router.push(`/tweet/${_id}`);
  };

  const onClickInside = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <S.Card tabIndex={0} onClick={onClickHandler}>
      <S.Avatar
        isComment={isComment || showCommentLine}
        onClick={onClickInside}
        className={disableActions ? "is-disabled" : ""}
        href={`/user/${authorId}`}
        tabIndex={0}
        avatarColor={avatarColor}
      >
        {getNameInitials(userName)}
      </S.Avatar>
      <S.TweetContent>
        {isPinned && (
          <S.Pinned>
            <Pin width={13} />
            Pinned tweet
          </S.Pinned>
        )}
        <TweetHeader
          createdAt={createdAt}
          name={name}
          userName={userName}
          authorId={authorId}
          disableActions={disableActions}
        />

        <S.Content>
          <S.Text>{content}</S.Text>
        </S.Content>
        <TweetFooter
          haveLikedTweet={haveLikedTweet}
          authorId={authorId}
          likedBy={likedBy}
          disableActions={disableActions}
          isComment={isComment}
          commentsCounter={commentsCounter}
          _id={_id}
          user={user}
          onDeslikeTweet={onDeslikeTweet}
          onLikeTweet={onLikeTweet}
          onDeleteTweet={onDeleteTweet}
        />
      </S.TweetContent>
    </S.Card>
  );
};

const MemorizedTweet = memo(Tweet);

export default connect(({ user }: RootStoreState, props) => ({
  user,
  ...props,
}))(MemorizedTweet);
