import { useState, memo, ChangeEvent } from "react";
import * as S from "./styled";

type Props = {
  isComment?: boolean;
  contentDefault?: string;
  tweetLimit?: number;
  onSubmitNewTweet: (s: string) => void;
  userName: string;
  isLoading?: boolean;
};

function TweetInput({
  isLoading,
  isComment,
  userName,
  contentDefault = "",
  tweetLimit = 150,
  onSubmitNewTweet,
}: Props): JSX.Element {
  const [content, setContent] = useState(contentDefault);

  const onChangeTweet = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(value);
  };

  const size = content.length;

  const isInvalid = size > tweetLimit;
  const valid = `${tweetLimit - size} character${
    tweetLimit - size > 1 ? "s" : ""
  } left`;
  const invalid = `${size - tweetLimit} characters more than the limit`;

  const onSubmitHandler = () => {
    onSubmitNewTweet(content);
    setContent("");
  };

  return (
    <S.Box>
      <S.Input
        placeholder={`what's going on, ${userName}?`}
        hasError={isInvalid}
        rows={4}
        onChange={onChangeTweet}
        value={content}
      ></S.Input>
      <S.TweetAction>
        <S.Button
          isLoading={isLoading}
          onClick={onSubmitHandler}
          disabled={!size || isInvalid}
        >
          {isComment ? "Comment" : "Tweet"}
        </S.Button>
        {!!size && <S.Counter>{isInvalid ? invalid : valid}</S.Counter>}
      </S.TweetAction>
    </S.Box>
  );
}

export default memo(TweetInput);
