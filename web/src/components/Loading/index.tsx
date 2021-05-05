import { Loading as LoadingIcon, SVGTypes } from "~icons";
import * as Styled from "./styles";

export default function Loading(props: SVGTypes): JSX.Element {
  return (
    <Styled.LoadingWrapper>
      <LoadingIcon {...props} />
    </Styled.LoadingWrapper>
  );
}
