import { Heart, Bin } from "~icons";
import * as S from "./styled";
import { HomeProps } from "~features/home";
import { colors } from "~theme";
import { Tweet as TweetType } from "~generated/graphql";

export type TweetProps = TweetType & {
  haveLikedTweet?: boolean;
} & Pick<
    HomeProps,
    "onDeleteTweet" | "onLikeTweetHandler" | "onDeslikeTweetHandler"
  >;

const Tweet = ({
  onDeleteTweet,
  onLikeTweetHandler,
  likedBy,
  haveLikedTweet,
  onDeslikeTweetHandler,
  name,
  userName,
  content,
  _id,
}: TweetProps): JSX.Element => {
  return (
    <S.Card tabIndex={0}>
      <S.Avatar>SJ</S.Avatar>
      <div>
        <S.Header>
          <S.Name href={`/${_id}`} tabIndex={0}>
            {name}
          </S.Name>
          <S.Username>@ {userName}</S.Username>
        </S.Header>
        <S.Content>
          <S.Text>{content}</S.Text>
        </S.Content>
        <S.Footer>
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
          <S.ActionBtn aria-label="Exclude" onClick={onDeleteTweet}>
            <Bin width={20} />
          </S.ActionBtn>
        </S.Footer>
      </div>
    </S.Card>
  );
};

export default Tweet;
