import ButtonBase from "~components/Button";
import styled from "styled-components";
import { colors } from "~theme";

export const A = styled.a`
  margin-top: 9px;
  margin-left: 9px;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Sidebar = styled.div`
  display: grid;
  position: sticky;
  top: 0;
`;

export const Header = styled.header`
  max-width: 80px;
  width: 100%;
  position: sticky;
  top: 15px;
  padding: 0 12px;
  justify-self: end;
  display: none;
  @media screen and (min-width: 762px) {
    display: block;
  }
  @media screen and (min-width: 992px) {
    max-width: 275px;
  }
`;

export const Button = styled(ButtonBase)<{ actived?: boolean }>`
  font-size: 20px;
  height: 50px;
  font-weight: 700;
  ${({ actived }) =>
    actived && `color: ${colors.blue}; path { fill: ${colors.blue} }`}
  .label {
    margin-left: 22px;
    display: none;
  }
  @media screen and (min-width: 992px) {
    .label {
      display: block;
    }
  }
`;
