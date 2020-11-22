import styled from "styled-components";

export const Content = styled.div`
  background: #15202b;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 600px 1fr;
`;

export const Column = styled.div`
  &:not(:last-child) {
    border-right: 1px solid rgb(56, 68, 77);
  }
`;
