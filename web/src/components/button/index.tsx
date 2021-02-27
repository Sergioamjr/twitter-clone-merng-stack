import { colors } from "~theme";
import styled from "styled-components";

export type CustomProps = {
  variant?: "ghost" | "danger" | "blue" | "green";
  rounded?: boolean;
  noPadding?: boolean;
};

export default styled.button<CustomProps>`
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
    path {
      fill: ${colors.blue};
    }
  }
  &:disabled {
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
  ${({ variant }) =>
    variant === "danger" &&
    `
    background-color: transparent;
    &:hover {
      background-color: ${colors.redDarken};
      path {
        fill: ${colors.red};
      }
    }
  `}
  ${({ variant }) =>
    variant === "blue" &&
    `
    background-color: transparent;
    &:hover {
      background-color: ${colors.blueDarken};
      path {
        fill: ${colors.blue};
      }
    }
  `}
  ${({ variant }) =>
    variant === "green" &&
    `
    background-color: transparent;
    &:hover {
      background-color: ${colors.greenDarken};
      path {
        fill: ${colors.green};
      }
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
