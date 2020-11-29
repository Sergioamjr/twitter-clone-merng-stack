import * as S from "./styled";

export type Props = {
  name: string;
  user: string;
  content: string;
  _id: string;
};

const Tweet = ({ name, user, content, _id }: Props): JSX.Element => {
  const onClickHandler = () => {
    console.log(_id);
  };

  return (
    <S.Card tabIndex={0}>
      <S.Avatar>SJ</S.Avatar>
      <div>
        <S.Header>
          <S.Name href={`/${_id}`} tabIndex={0}>
            {name}
          </S.Name>
          <S.Username>@ {user}</S.Username>
        </S.Header>
        <S.Content>
          <S.Text>{content}</S.Text>
        </S.Content>
        <S.Footer>
          <S.Like onClick={onClickHandler}>S</S.Like>
          <S.Like onClick={onClickHandler}>V</S.Like>
          <S.Like onClick={onClickHandler}>C</S.Like>
        </S.Footer>
      </div>
    </S.Card>
  );
};

export default Tweet;
