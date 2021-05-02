import React from "react";
import ButtonWithCounter from "~components/ButtonWithCounter";
import { Bin, Heart, Share, Comment } from "~icons";
import { colors } from "~theme";
import * as S from "./styled";
import { TweetProps } from ".";

type Props = Pick<
  TweetProps,
  | "haveLikedTweet"
  | "authorId"
  | "likedBy"
  | "disableActions"
  | "isComment"
  | "commentsCounter"
  | "_id"
  | "user"
  | "onDeslikeTweet"
  | "onLikeTweet"
  | "onDeleteTweet"
>;

export function TweetFooter({
  haveLikedTweet,
  authorId,
  likedBy,
  disableActions,
  isComment,
  commentsCounter,
  _id,
  user,
  onDeslikeTweet,
  onLikeTweet,
  onDeleteTweet,
}: Props): JSX.Element {
  const onLikeTweetHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    haveLikedTweet ? onDeslikeTweet(_id) : onLikeTweet(_id);
  };

  const onDeleteTweetHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDeleteTweet(_id);
  };

  const onShareHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const url = `${window.location.origin}/tweet/${_id}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Clone Twitter",
          text: "Hey, look at this tweet.",
          url,
        });
        return false;
      }
      console.log("copiado");
    } catch (err) {
      console.log("copiado");
    }
  };

  return (
    <S.Footer>
      <ButtonWithCounter
        onClick={onLikeTweetHandler}
        rounded
        aria-label="Like tweet"
        variant="danger"
        counter={likedBy.length}
        disabled={user._id === authorId || disableActions}
        Icon={
          <Heart
            width={20}
            color={haveLikedTweet ? colors.red : colors.lightLighten}
          />
        }
      />

      {user._id === authorId && (
        <ButtonWithCounter
          onClick={onDeleteTweetHandler}
          rounded
          aria-label="Delete tweet"
          variant="danger"
          Icon={<Bin width={20} />}
        />
      )}
      {!isComment && (
        <ButtonWithCounter
          rounded
          disabled={disableActions}
          counter={commentsCounter}
          variant="blue"
          aria-label="Comment tweet"
          Icon={<Comment color={colors.lightLighten} />}
        />
      )}
      {!isComment && (
        <ButtonWithCounter
          variant="green"
          rounded
          aria-label="Share tweet"
          onClick={onShareHandler}
          Icon={<Share />}
        />
      )}
    </S.Footer>
  );
}
