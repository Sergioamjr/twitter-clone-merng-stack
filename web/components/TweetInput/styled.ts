import styled from "styled-components";
import { colors, fontSizes, spacings } from "../../theme";
import ButtonBase from "./../button";

export const Input = styled.textarea`
  width: 100%;
  border: 1px solid ${colors.whiteDarken};
  resize: none;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: ${fontSizes.small};
  color: ${colors.dark};
`;

export const Button = styled(ButtonBase)``;

export const Box = styled.div``;

export const Counter = styled.span`
  margin-left: ${spacings.small};
  font-size: ${fontSizes.extraSmall};
  color: ${colors.darkLighten};
`;
