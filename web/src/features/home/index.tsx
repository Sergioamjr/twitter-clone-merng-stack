import { connect } from "react-redux";
import TweetCard from "~components/Tweet";
import TweetInput from "~components/TweetInput";
import { Tweet, LoggedUser } from "~generated/graphql";
import { Column } from "~components/template";

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
    <Column>
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
    </Column>
  );
};

export default connect(({ user }, props) => ({ user, ...props }))(Home);
