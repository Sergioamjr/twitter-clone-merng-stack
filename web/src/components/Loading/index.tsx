import { Loading as LoadingIcon } from "~icons";
import * as Styled from "./styles";

export default function Loading(): JSX.Element {
  return (
    <Styled.LoadingWrapper>
      <LoadingIcon />
    </Styled.LoadingWrapper>
  );
}
