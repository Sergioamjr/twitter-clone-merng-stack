import { useGetTweetsQuery } from "../src/generated/graphql";
import Home from "./../src/features/home";

export default function HomePage(): JSX.Element {
  const { data } = useGetTweetsQuery();
  return <Home tweets={data.getTweets} />;
}
