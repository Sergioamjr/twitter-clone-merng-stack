import TweetCard from "./../../components/Tweet";
import TweetInput from "./../../components/TweetInput";
import * as S from "./styled";
import { Tweet } from "./../../generated/graphql";

type HomeProps = {
  tweets?: Tweet[];
  onSubmitNewTweet: (s: string) => void;
  onDeleteTweet: (id: string) => void;
};

const Home = ({
  onDeleteTweet,
  onSubmitNewTweet,
  tweets = [],
}: HomeProps): JSX.Element => {
  return (
    <S.Content>
      <S.Column>
        <S.Text>Perfil</S.Text>
      </S.Column>
      <S.Column>
        <TweetInput onSubmitNewTweet={onSubmitNewTweet} />
        {tweets.map(({ _id, content, userName, name }) => {
          return (
            <TweetCard
              onDeleteTweet={onDeleteTweet}
              key={_id}
              name={name}
              user={userName}
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
