import styled from "styled-components";
import Button from "~components/button";
import { colors, fontSizes, spacings } from "~theme";

export const Header = styled.div`
  height: 150px;
  background: #333;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: red;
  border-radius: 50%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.large};
  position: relative;
  top: -40px;
  left: 0;
`;

export const UserName = styled.p`
  color: ${colors.white};
`;

export const UserAlias = styled.p`
  color: ${colors.lightLighten};
`;

export const Action = styled(Button)`
  margin-top: ${spacings.medium};
`;

export const Content = styled.div`
  position: relative;
  padding: ${spacings.medium};
  padding-top: 0;
`;

export const Spacer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: -${spacings.medium};
`;
