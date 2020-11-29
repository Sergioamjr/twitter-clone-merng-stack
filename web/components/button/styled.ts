import { colors } from "./../../theme/index";
import styled, { css } from "styled-components";
import { darken } from "polished";

export const BaseButton = css`
  border: 0;
  border-radius: 50px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${darken(0.2, colors.blue)};
  }
`;

export const Button = styled.button`
  ${BaseButton};
`;
