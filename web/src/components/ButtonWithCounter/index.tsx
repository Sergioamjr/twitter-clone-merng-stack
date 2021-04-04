import React from "react";
import Button, { ButtonProps } from "~components/Button";
import * as Styles from "./styles";

type Props = {
  counter?: number;
  Icon: React.ReactNode;
} & Pick<ButtonProps, "onClick" | "rounded" | "variant" | "disabled">;

export default function ButtonWithCounter({
  Icon,
  counter,
  ...props
}: Props): JSX.Element {
  return (
    <Styles.Wrapper>
      <Button {...props}>{Icon}</Button>
      {!!counter && <Styles.Counter>{counter}</Styles.Counter>}
    </Styles.Wrapper>
  );
}
