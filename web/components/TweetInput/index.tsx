import { useState } from "react";
import * as S from "./styled";

const TweetInput = (): JSX.Element => {
  const [content, setContent] = useState("");

  const onChangeTweet = ({ target: { value } }) => {
    setContent(value);
  };

  return (
    <S.Box>
      <S.Input
        rows="4"
        onChange={onChangeTweet}
        type="text"
        value={content}
      ></S.Input>
      <S.Button disabled={!content.length}>Tweet</S.Button>
      {!!content.length && <S.Counter>{content.length} caracteres</S.Counter>}
    </S.Box>
  );
};

export default TweetInput;
