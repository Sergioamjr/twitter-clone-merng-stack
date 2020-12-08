import Tweet from "../../components/Tweet";
import TweetInput from "../../components/TweetInput";
import * as S from "./styled";

const Home = (): JSX.Element => {
  return (
    <S.Content>
      <S.Column>
        <S.Text>Perfil</S.Text>
      </S.Column>
      <S.Column>
        <TweetInput />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <Tweet
              key={i}
              name="Sérgio Júnior"
              user="sergioamjr_"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sodales nibh, vel egestas orci. Praesent mauris leo, pellentesque non malesuada non, sollicitudin dignissim neque. Fusce ornare nibh eget risus ullamcorper scelerisque. Nulla et pellentesque ligula, a maximus purus. Donec at odio quis dolor efficitur malesuada."
              _id="123"
            />
          );
        })}
      </S.Column>
      <S.Column>
        <S.Text>Explorer</S.Text>
      </S.Column>
    </S.Content>
  );
};

export default Home;
