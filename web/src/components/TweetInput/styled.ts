import styled from "styled-components";
import { colors, fontSizes, spacings } from "~theme";
import ButtonBase from "~components/BButton";

export const Input = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  border: ${({ hasError }) =>
    `1px solid ${hasError ? colors.redLighten : colors.whiteDarken}`};
  resize: none;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: ${fontSizes.small};
  color: ${colors.white};
  background: ${colors.darkBackgroundLighten};
  &::placeholder {
    color: ${colors.whiteDarken};
  }
`;

export const Button = styled(ButtonBase)``;

export const Box = styled.div`
  padding: 15px;
`;

export const Counter = styled.span`
  margin-left: ${spacings.small};
  font-size: ${fontSizes.small};
  color: ${colors.whiteDarken};
`;

export const TweetAction = styled.div`
  display: flex;
  align-items: center;
`;
