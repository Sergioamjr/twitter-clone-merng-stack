import styled from "styled-components";
import { colors } from "~theme";

export const Wrapper = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
`;

export const Counter = styled.p`
  color: ${colors.lightLighten};
  margin-left: 5px;
`;
