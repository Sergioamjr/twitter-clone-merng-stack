import { colors } from "~theme";
import styled, { css } from "styled-components";
import { CustomProps } from "./";

export const BaseButton = css<CustomProps>`
  border: 0;
  border-radius: 50px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.blueDarken};
  }
  &:disabled {
    background-color: ${colors.blueLighten};
    cursor: not-allowed;
  }
  ${({ variant }) =>
    variant === "ghost" &&
    `
    background-color: transparent;
    &:hover {
      background-color: ${colors.darkBackgroundLighten};
    }
  `}
  ${({ rounded }) =>
    rounded &&
    `
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 0;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  ${BaseButton};
`;
