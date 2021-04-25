import {
  HashTag,
  BookMark,
  Twitter,
  Home,
  Dots,
  List,
  Notification,
  Profile,
} from "~icons";
import * as S from "./styles";

export default function SidebarShortCuts(): JSX.Element {
  return (
    <S.Header>
      <S.Button variant="blue">
        <Twitter />
      </S.Button>
      <S.Button variant="blue">
        <Home />
        <span>Home</span>
      </S.Button>
      <S.Button variant="blue">
        <HashTag />
        <span>Explorer</span>
      </S.Button>
      <S.Button variant="blue">
        <Notification />
        <span>Notifications</span>
      </S.Button>
      <S.Button variant="blue">
        <BookMark />
        <span>Bookmarks</span>
      </S.Button>
      <S.Button variant="blue">
        <List />
        <span>List</span>
      </S.Button>
      <S.Button variant="blue">
        <Profile />
        <span>Profile</span>
      </S.Button>
      <S.Button variant="blue">
        <Dots />
        <span>More</span>
      </S.Button>
    </S.Header>
  );
}
