import { BaseButton } from "~components/button/styled";
import styled from "styled-components";
import { colors, spacings, fontSizes } from "~theme";

export const Card = styled.section`
  border: 1px solid ${colors.light};
  border-left: 0;
  border-right: 0;
  padding: ${spacings.small};
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 0;
  }
`;

export const ShowOnMobile = styled.span`
  @media screen and (min-width: 762px) {
    display: none;
  }
`;

export const ShowOnDesktop = styled.span`
  display: none;
  @media screen and (min-width: 762px) {
    display: inline-block;
  }
`;

export const Text = styled.p`
  line-height: 1.4;
  color: ${colors.whiteLighten};
`;

export const Name = styled.a`
  color: ${colors.white};
`;

export const TweetContent = styled.div`
  width: calc(100% - 60px);
`;

export const Username = styled.p`
  color: ${colors.lightLighten};
  margin-left: ${spacings.small};
  font-size: ${fontSizes.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header = styled.div`
  margin-bottom: ${spacings.small};
  display: flex;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Content = styled.main`
  margin-bottom: ${spacings.medium};
`;

export const Avatar = styled.div<{ avatarColor: string }>`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${({ avatarColor }) => avatarColor};
`;

export const ActionBtn = styled.button`
  ${BaseButton};
  width: 30px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.darkBackground};
  transition: all 0.4s ease;
  &:hover {
    background: transparent;
    svg path {
      fill: ${colors.blue};
    }
  }
`;

export const HowManyLikes = styled.p`
  color: ${colors.lightLighten};
  margin-left: 10px;
`;

export const ActionBtnGroup = styled.div`
  display: flex;
`;
