import { connect } from "react-redux";
import TweetCard from "~components/Tweet";
import TweetInput from "~components/TweetInput";
import * as S from "./styled";
import { Tweet, LoggedUser } from "~generated/graphql";

export type HomeProps = {
  tweets?: Tweet[];
  onSubmitNewTweet: (id: string) => void;
  onDeleteTweet: (id: string) => void;
  onLikeTweetHandler: (id: string) => void;
  onDeslikeTweetHandler: (id: string) => void;
  user: LoggedUser;
};

const Home = ({
  onDeleteTweet,
  onSubmitNewTweet,
  onLikeTweetHandler,
  onDeslikeTweetHandler,
  tweets = [],
  user,
}: HomeProps): JSX.Element => {
  return (
    <S.Content>
      <S.Column />
      <S.Column>
        <TweetInput onSubmitNewTweet={onSubmitNewTweet} />
        {tweets.map(({ _id, content, userName, name, likedBy }) => {
          return (
            <TweetCard
              haveLikedTweet={likedBy.includes(user._id)}
              onLikeTweetHandler={() => onLikeTweetHandler(_id)}
              onDeslikeTweetHandler={() => onDeslikeTweetHandler(_id)}
              onDeleteTweet={() => onDeleteTweet(_id)}
              key={_id}
              name={name}
              userName={userName}
              content={content}
              _id={_id}
              likedBy={likedBy}
            />
          );
        })}
      </S.Column>
      <S.Column />
    </S.Content>
  );
};

export default connect(({ user }, props) => ({ user, ...props }))(Home);
