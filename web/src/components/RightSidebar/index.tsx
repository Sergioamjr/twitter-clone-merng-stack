import BoxWithList from "~components/BoxWithList";
import Button from "~components/Button";
import * as S from "./styles";

const trendings = [
  {
    title: "Oscar 2021",
    subtitle: "Entertainment . Trending",
    description: "455k Tweets",
  },
  {
    title: "La Liga",
    subtitle: "Spots . Trending",
    description: "233k Tweets",
  },
  {
    title: "Taylor Swift",
    subtitle: "Music . Trending",
    description: "193k Tweets",
  },
];

const topics = [
  {
    title: "Marvel",
    description: "Fictional universe",
  },
  {
    title: "Viral Tweets",
    description: "Popular right now",
  },
  {
    title: "Football",
    description: "Sport",
  },
];

export default function RightSidebar(): JSX.Element {
  return (
    <S.Sidebar>
      <BoxWithList
        title="What’s happening"
        items={trendings.map(({ title, description }, i) => {
          return (
            <div key={i}>
              <p>{title}</p>
              <span className="description">{description}</span>
            </div>
          );
        })}
      />
      <BoxWithList
        title="Topics to follow"
        items={topics.map(({ title, description }, i) => {
          return (
            <div key={i} className="with-button">
              <div>
                <p>{title}</p>
                <span className="description">{description}</span>
              </div>
              <Button disabled>Follow</Button>
            </div>
          );
        })}
      />
    </S.Sidebar>
  );
}
