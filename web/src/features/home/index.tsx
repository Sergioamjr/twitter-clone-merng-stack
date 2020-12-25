import TweetCard from "~components/Tweet";
import TweetInput from "~components/TweetInput";
import * as S from "./styled";
import { Tweet } from "~generated/graphql";

export type HomeProps = {
  tweets?: Tweet[];
  onSubmitNewTweet: (id: string) => void;
  onDeleteTweet: (id: string) => void;
  onLikeTweetHandler: (id: string) => void;
  onDeslikeTweetHandler: (id: string) => void;
};

const Home = ({
  onDeleteTweet,
  onSubmitNewTweet,
  onLikeTweetHandler,
  onDeslikeTweetHandler,
  tweets = [],
}: HomeProps): JSX.Element => {
  return (
    <S.Content>
      <S.Column>
        <S.Text>Perfil</S.Text>
      </S.Column>
      <S.Column>
        <TweetInput onSubmitNewTweet={onSubmitNewTweet} />
        {tweets.map(({ _id, content, userName, name, likedBy }) => {
          return (
            <TweetCard
              onLikeTweetHandler={() => onLikeTweetHandler(_id)}
              onDeslikeTweetHandler={() => onDeslikeTweetHandler(_id)}
              onDeleteTweet={() => onDeleteTweet(_id)}
              key={_id}
              name={name}
              user={userName}
              content={content}
              _id={_id}
              likedBy={likedBy}
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
