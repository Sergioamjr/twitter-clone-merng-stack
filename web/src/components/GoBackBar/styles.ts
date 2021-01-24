import styled from "styled-components";
import { colors, spacings } from "~theme";

export const GoBack = styled.div`
  height: 50px;
  background: ${colors.darkBackground};
  border-bottom: 1px solid ${colors.light};
  padding: 0 ${spacings.medium};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;
