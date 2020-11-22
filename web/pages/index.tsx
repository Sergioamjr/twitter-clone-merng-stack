import Head from "next/head";
import * as S from "./styled";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Content>
        <S.Column>
          <p>Perfil</p>
        </S.Column>
        <S.Column>
          <p>Content</p>
        </S.Column>
        <S.Column>
          <p>Explorer</p>
        </S.Column>
      </S.Content>
    </>
  );
};

export default Home;
