import BoxWithList from "~components/BoxWithList";
import * as S from "./styles";

const trendings = [
  {
    title: "Oscar 2021",
    subtitle: "Entertetimnemt . Trending",
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
  {
    title: "Dog",
    subtitle: "Pets . Trending",
    description: "19k Tweets",
  },
];

export default function RightSidebar(): JSX.Element {
  return (
    <S.Sidebar>
      <BoxWithList
        title="Whats happening"
        items={trendings.map(({ title, subtitle, description }, i) => {
          return (
            <div key={i}>
              <span>{subtitle}</span>
              <p>{title}</p>
              <span>{description}</span>
            </div>
          );
        })}
      />
    </S.Sidebar>
  );
}
