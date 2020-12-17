import {
  useGetTweetsQuery,
  useNewTweetMutation,
} from "../src/generated/graphql";
import Home from "./../src/features/home";

export default function HomePage(): JSX.Element {
  const { data, refetch } = useGetTweetsQuery();
  const [fn] = useNewTweetMutation();

  const onSubmitNewTweet = async (content) => {
    await fn({
      variables: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRhZjQ0NjRlNzM0MzA5MDg5ZTY0M2YiLCJpYXQiOjE2MDgxODQ5MDJ9.SyQydJtNIzuNWpTdzmAoFLx5Bo4SL04sAsGdxLHwS90",
        content,
      },
    });
    refetch();
  };

  return <Home onSubmitNewTweet={onSubmitNewTweet} tweets={data?.getTweets} />;
}
