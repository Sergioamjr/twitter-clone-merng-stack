import Link from "next/link";
import { useRouter } from "next/router";
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
  const route = useRouter();
  console.log(route);
  return (
    <S.Sidebar>
      <S.Header>
        <Link href="/">
          <S.A>
            <Twitter width={30} />
          </S.A>
        </Link>

        <S.Button disabled variant="blue" actived={route.pathname === "/"}>
          <Home />
          <span>Home</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <HashTag />
          <span>Explore</span>
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
