import { useState } from "react";
import * as S from "./styled";

type Props = {
  contentDefault?: string;
  tweetLimit?: number;
};

const TweetInput = ({
  contentDefault = "",
  tweetLimit = 10,
}: Props): JSX.Element => {
  const [content, setContent] = useState(contentDefault);

  const onChangeTweet = ({ target: { value } }) => {
    setContent(value);
  };

  const size = content.length;

  const isInvalid = size > tweetLimit;
  const valid = `${tweetLimit - size} caracteres restantes.`;
  const invalid = `${size - tweetLimit} a mais.`;

  return (
    <S.Box>
      <S.Input
        hasError={isInvalid}
        rows="4"
        onChange={onChangeTweet}
        type="text"
        value={content}
      ></S.Input>
      <S.Button disabled={!size || isInvalid}>Tweet</S.Button>
      {!!size && <S.Counter>{isInvalid ? invalid : valid}</S.Counter>}
    </S.Box>
  );
};

export default TweetInput;
