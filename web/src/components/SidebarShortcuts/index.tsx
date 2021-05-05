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
          <span className="label">Home</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <HashTag />
          <span className="label">Explore</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <Notification />
          <span className="label">Notifications</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <BookMark />
          <span className="label">Bookmarks</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <List />
          <span className="label">List</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <Profile />
          <span className="label">Profile</span>
        </S.Button>
        <S.Button disabled variant="blue">
          <Dots />
          <span className="label">More</span>
        </S.Button>
      </S.Header>
    </S.Sidebar>
  );
}
