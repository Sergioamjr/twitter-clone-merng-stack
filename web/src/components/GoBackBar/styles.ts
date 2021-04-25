import styled from "styled-components";
import { colors, spacings } from "~theme";

export const GoBack = styled.div`
  height: 50px;
  border-bottom: 1px solid rgb(56, 68, 77);
  background: ${colors.darkBackground};
  padding: 0 ${spacings.medium};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  a {
    margin-right: ${spacings.medium};
  }
`;
