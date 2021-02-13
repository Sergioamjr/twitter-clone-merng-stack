import { useState, memo } from "react";
import * as S from "./styled";

type Props = {
  contentDefault?: string;
  tweetLimit?: number;
  onSubmitNewTweet: (s: string) => void;
  userName: string;
};

function TweetInput({
  userName,
  contentDefault = "",
  tweetLimit = 150,
  onSubmitNewTweet,
}: Props): JSX.Element {
  const [content, setContent] = useState(contentDefault);

  const onChangeTweet = ({ target: { value } }) => {
    setContent(value);
  };

  const size = content.length;

  const isInvalid = size > tweetLimit;
  const valid = `${tweetLimit - size} caracteres restantes.`;
  const invalid = `${size - tweetLimit} a mais.`;

  const onSubmitHandler = () => {
    onSubmitNewTweet(content);
    setContent("");
  };

  return (
    <S.Box>
      <S.Input
        placeholder={`what's going on, ${userName}?`}
        hasError={isInvalid}
        rows="4"
        onChange={onChangeTweet}
        type="text"
        value={content}
      ></S.Input>
      <S.Button onClick={onSubmitHandler} disabled={!size || isInvalid}>
        Tweet
      </S.Button>
      {!!size && <S.Counter>{isInvalid ? invalid : valid}</S.Counter>}
    </S.Box>
  );
}

export default memo(TweetInput);
