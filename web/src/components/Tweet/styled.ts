import { BaseButton } from "~components/button/styled";
import styled from "styled-components";
import { colors, spacings, fontSizes } from "~theme";

export const Card = styled.section`
  border: 1px solid ${colors.light};
  border-left: 0;
  border-right: 0;
  padding: ${spacings.small};
  display: grid;
  grid-template-columns: 50px 1fr;
  &:not(:last-child) {
    border-bottom: 0;
  }
`;

export const Text = styled.p`
  line-height: 1.4;
  color: ${colors.whiteLighten};
`;

export const Name = styled.a`
  color: ${colors.white};
`;

export const Username = styled.p`
  color: ${colors.lightLighten};
  margin-left: ${spacings.small};
  font-size: ${fontSizes.extraSmall};
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

export const Avatar = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${({ color }) => color};
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
