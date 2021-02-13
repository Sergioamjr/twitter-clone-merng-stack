import styled from "styled-components";
import Button from "~components/button";
import { colors, fontSizes, spacings } from "~theme";

export const Header = styled.div`
  height: 150px;
  background-image: url(https://pcdn.sharethis.com/wp-content/uploads/2019/07/twitter-chatter-Converted-01-2.png);
  background-position: center;
  background-size: cover;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: #ea5959;
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
