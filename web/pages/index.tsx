import * as S from "./styled";

const Home = (): JSX.Element => {
  return (
    <S.Content>
      <S.Column>
        <S.Text>Perfil</S.Text>
      </S.Column>
      <S.Column>
        <S.Text>Content</S.Text>
      </S.Column>
      <S.Column>
        <S.Text>Explorer</S.Text>
      </S.Column>
    </S.Content>
  );
};

export default Home;
