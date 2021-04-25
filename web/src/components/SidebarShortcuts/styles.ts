import ButtonBase from "~components/Button";
import styled from "styled-components";

export const Header = styled.header`
  max-width: 275px;
  width: 100%;
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
