import { colors } from "./../../theme/index";
import styled, { css } from "styled-components";

const ButtonStyle = css`
  border: 0;
  border-radius: 50px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: ${colors.darkBackground};
  color: ${colors.white};
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0e171f;
  }
`;

export const Button = styled.button`
  ${ButtonStyle};
`;
