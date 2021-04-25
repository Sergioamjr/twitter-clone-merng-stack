import ButtonBase from "~components/Button";
import styled from "styled-components";

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

export const Button = styled(ButtonBase)`
  font-size: 20px;
  height: 50px;
  font-weight: 700;
  span {
    margin-left: 15px;
    display: none;
  }
  @media screen and (min-width: 992px) {
    span {
      display: block;
    }
  }
`;
