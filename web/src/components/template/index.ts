import { colors } from "~theme";
import styled from "styled-components";

export const Page = styled.div`
  background: ${colors.darkBackground};
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 600px 1fr;
`;

export const Column = styled.div`
  overflow: auto;
  &:not(:last-child) {
    border-right: 1px solid ${colors.light};
  }
`;
