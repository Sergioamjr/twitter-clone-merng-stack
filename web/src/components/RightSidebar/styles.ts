import styled from "styled-components";

export const Sidebar = styled.div`
  display: grid;
  position: sticky;
  top: 0;
  padding: 20px;
  display: none;
  @media screen and (min-width: 1200px) {
    display: grid;
  }
`;
