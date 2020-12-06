import { BaseButton } from "./../button/styled";
import styled from "styled-components";

import { colors, spacings } from "../../theme";

export const Card = styled.section`
  border: 1px solid ${colors.light};
  &:not(:last-child) {
    border-bottom: 0;
  }
  padding: ${spacings.small};
  display: grid;
  grid-template-columns: 50px 1fr;
`;

export const Text = styled.p`
  color: ${colors.white};
`;

export const Name = styled.a`
  color: ${colors.white};
`;

export const Username = styled.p`
  color: ${colors.light};
  margin-left: ${spacings.small};
`;

export const Header = styled.div`
  margin-bottom: ${spacings.small};
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Content = styled.main`
  margin-bottom: ${spacings.medium};
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${colors.avatar};
`;

export const Like = styled.button`
  ${BaseButton};
  width: 30px;
  padding: 0;
  border-radius: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.darkBackground};
  transition: all 0.4s ease;
  &:hover {
    background: ${colors.greenLighten};
    svg path {
      fill: ${colors.greenDarken};
    }
  }
`;
