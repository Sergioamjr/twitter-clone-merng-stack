import BaseButton from "~components/BButton";
import styled from "styled-components";
import { colors, spacings, fontSizes } from "~theme";

export const Card = styled.section`
  border: 1px solid ${colors.light};
  border-left: 0;
  overflow: hidden;
  border-right: 0;
  padding: ${spacings.small};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 0;
  }
  &:hover {
    background: ${colors.darkBackgroundDarken};
  }
  &:last-of-type a:after {
    display: none;
  }
  &:first-of-type a:before {
    display: none;
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
  display: flex;
`;

export const Content = styled.main`
  margin-bottom: ${spacings.medium};
`;

export const Avatar = styled.a<{ avatarColor: string; isComment: boolean }>`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${({ avatarColor }) => avatarColor};
  position: relative;
  &:after,
  &:before {
    ${({ isComment }) => isComment && "content: ''"};
    width: 2px;
    height: 200%;
    background: ${colors.light};
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 49px;
  }
  &:before {
    height: 10px;
    top: -10px;
  }
`;

export const ActionBtn = styled(BaseButton)``;

export const HowManyLikes = styled.p`
  color: ${colors.lightLighten};
  margin-left: 5px;
`;
