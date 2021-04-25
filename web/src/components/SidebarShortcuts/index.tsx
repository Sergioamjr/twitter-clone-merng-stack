import Link from "next/link";
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
    <S.Sidebar>
      <S.Header>
        <Link href="/">
          <a>
            <S.Button variant="blue">
              <Twitter width={30} />
            </S.Button>
          </a>
        </Link>

        <S.Button disabled variant="blue">
          <Home />
          <span>Home</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <HashTag />
          <span>Explorer</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <Notification />
          <span>Notifications</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <BookMark />
          <span>Bookmarks</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <List />
          <span>List</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <Profile />
          <span>Profile</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <Dots />
          <span>More</span>
        </S.Button>
      </S.Header>
    </S.Sidebar>
  );
}
