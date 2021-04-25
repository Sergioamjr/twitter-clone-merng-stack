import styled from "styled-components";
import { colors, fontSizes } from "~theme";

export const Box = styled.div`
  background: #16181d;
  position: sticky;
  top: 15px;
  max-width: 348px;
  width: 100%;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  height: auto;
`;

export const A = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  padding: 16px;
  display: block;
`;

export const Title = styled.div<{ withBorder?: boolean }>`
  padding: 12px 16px;
  ${({ withBorder }) =>
    withBorder && "border-bottom: 1px solid rgb(47, 51, 54);"}
`;

export const Item = styled.li`
  padding: 12px 16px;
  span {
    color: ${colors.lightLighten};
    color: #6E767D;
    font-size: ${fontSizes.extraSmall};
  }
  p {
    margin: 4px 0;
    font-weight: bold;
    color: ${colors.white};
  }
  border-bottom: 1px solid rgb(47, 51, 54)};
`;
