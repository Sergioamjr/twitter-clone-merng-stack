import { Loading as LoadingIcon } from "~icons";
import * as Styled from "./styles";

export default function Loading(props): JSX.Element {
  return (
    <Styled.LoadingWrapper>
      <LoadingIcon {...props} />
    </Styled.LoadingWrapper>
  );
}
