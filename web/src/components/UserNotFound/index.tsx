import { Ghost } from "react-kawaii";
import * as S from "./styles";

type Props = {
  type: "Tweet" | "User" | "Page";
};

export default function UserNotFound({ type }: Props): JSX.Element {
  return (
    <S.NotFound>
      <S.Text>{type} not found</S.Text>
      <Ghost size={170} mood="sad" color="#adf" />
    </S.NotFound>
  );
}
