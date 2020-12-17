import TweetCard from "./../../components/Tweet";
import TweetInput from "./../../components/TweetInput";
import * as S from "./styled";
import { Tweet } from "./../../generated/graphql";

type HomeProps = {
  tweets: Tweet[];
};

const Home = ({ tweets }: HomeProps): JSX.Element => {
  console.log(tweets);
  return (
    <S.Content>
      <S.Column>
        <S.Text>Perfil</S.Text>
      </S.Column>
      <S.Column>
        <TweetInput />
        {tweets.map(({ _id, content }) => {
          return (
            <TweetCard
              key={_id}
              name="Sérgio Júnior"
              user="sergioamjr_"
              content={content}
              _id={_id}
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
