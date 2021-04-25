import { colors } from "~theme";
import styled from "styled-components";
import SidebarShortCuts from "~components/SidebarShortcuts";
import RightSidebar from "~components/RightSidebar";
import { WithChildren } from "~utils/types";

export default function Template({ children }: WithChildren): JSX.Element {
  return (
    <Page>
      <Column>
        <SidebarShortCuts />
      </Column>
      <Column>{children}</Column>
      <Column>
        <RightSidebar />
      </Column>
    </Page>
  );
}

export const Page = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 0 100% 0;
  @media screen and (min-width: 762px) {
    grid-template-columns: 1fr 600px 1fr;
  }
`;

export const Column = styled.div`
  overflow: initial;
  &:not(:last-child) {
    border-right: 1px solid ${colors.light};
  }
`;
