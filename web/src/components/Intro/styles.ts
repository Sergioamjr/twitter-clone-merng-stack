import styled from "styled-components";
import { colors, fontSizes } from "~theme";

export const Text = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.normal};
  font-weight: 200;
  margin-bottom: 15px;
  span {
    font-weight: bold;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
