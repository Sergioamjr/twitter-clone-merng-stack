import SectionTitle from "~components/SectionTitle";
import * as S from "./styles";

type Props = {
  title: string;
  items: React.ReactNode[];
};

export default function BoxWithList({ title, items }: Props): JSX.Element {
  return (
    <S.Box>
      <S.Title withBorder>
        <SectionTitle>{title}</SectionTitle>
      </S.Title>
      <ul>
        {items.map((Component, index) => {
          return <S.Item key={index}>{Component}</S.Item>;
        })}
      </ul>
      <S.A href="#">Show more</S.A>
    </S.Box>
  );
}
