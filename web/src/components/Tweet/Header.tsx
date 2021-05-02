import { format, formatDistance } from "date-fns";
import * as S from "./styled";
import { TweetProps } from ".";

type Props = Pick<
  TweetProps,
  "authorId" | "disableActions" | "name" | "userName" | "createdAt"
>;

export function TweetHeader({
  authorId,
  disableActions,
  name,
  userName,
  createdAt,
}: Props): JSX.Element {
  const dateDesktop = formatDistance(new Date(createdAt), new Date());
  const dateMobile = format(new Date(createdAt), "MMM/yyyy");

  const onClickInside = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <S.Header>
      <S.Name
        onClick={onClickInside}
        className={disableActions ? "is-disabled" : ""}
        href={`/user/${authorId}`}
        tabIndex={0}
      >
        {name}
      </S.Name>
      <S.Username>
        @{userName} · <S.ShowOnMobile>{dateMobile}</S.ShowOnMobile>
        <S.ShowOnDesktop>{dateDesktop}</S.ShowOnDesktop>
      </S.Username>
    </S.Header>
  );
}
