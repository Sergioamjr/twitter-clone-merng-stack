import { colors } from "~theme";
import styled, { StyledComponentPropsWithRef } from "styled-components";
import Loading from "~components/Loading";

export type ButtonProps = StyledComponentPropsWithRef<"button"> & {
  variant?: "ghost" | "danger" | "blue" | "green";
  rounded?: boolean;
  noPadding?: boolean;
  isLoading?: boolean;
};

const BaseButton = styled.button<ButtonProps>`
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
      color: ${colors.blue};
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
    !!rounded &&
    `
  border-radius: 50%;
  height: 35px;
  width: 35px;
  padding: 0;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .loading-icon {
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    opacity: ${({ isLoading }) => (!isLoading ? 0 : 1)};
  }
  .button-content {
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    display: flex;
  }
`;

export default function Button({
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <BaseButton
      {...props}
      disabled={disabled || isLoading}
      isLoading={isLoading}
    >
      <Loading className="loading-icon" width={18} height={18} color="#fff" />{" "}
      <span className="button-content">{children}</span>
    </BaseButton>
  );
}
