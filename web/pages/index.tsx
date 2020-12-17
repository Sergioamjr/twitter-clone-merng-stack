import { useGetTweetsQuery } from "../src/generated/graphql";
import Home from "./../src/features/home";

export default function HomePage(): JSX.Element {
  const { data } = useGetTweetsQuery();
  console.log(data);
  return <Home tweets={data?.getTweets} />;
}
