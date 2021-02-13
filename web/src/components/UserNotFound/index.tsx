import { Ghost } from "react-kawaii";
import * as S from "./styles";

export default function UserNotFound(): JSX.Element {
  return (
    <S.NotFound>
      <S.Text>User not found</S.Text>
      <Ghost size={170} mood="sad" color="#adf" />
    </S.NotFound>
  );
}
