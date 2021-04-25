import ButtonBase from "~components/Button";
import styled from "styled-components";

export const Sidebar = styled.div`
  display: grid;
  position: sticky;
  top: 0;
`;

export const Header = styled.header`
  max-width: 275px;
  width: 100%;
  position: sticky;
  top: 15px;
  padding: 0 12px;
  justify-self: end;
`;

export const Button = styled(ButtonBase)`
  font-size: 20px;
  height: 50px;
  font-weight: 700;
  span {
    margin-left: 10px;
  }
`;
