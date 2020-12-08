import { Heart } from "../../icons";
import * as S from "./styled";

export type Props = {
  /**
   User name
  */
  name: string;
  /**
   User @
  */
  user: string;
  /**
   Tweet content
  */
  content: string;
  /**
   Tweet ID
  */
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
          <S.Like aria-label="like" onClick={onClickHandler}>
            <Heart width={20} />
          </S.Like>
          <S.Like aria-label="like" onClick={onClickHandler}>
            <Heart width={20} />
          </S.Like>
          <S.Like aria-label="like" onClick={onClickHandler}>
            <Heart width={20} />
          </S.Like>
          <S.Like aria-label="like" onClick={onClickHandler}>
            <Heart width={20} />
          </S.Like>
        </S.Footer>
      </div>
    </S.Card>
  );
};

export default Tweet;
