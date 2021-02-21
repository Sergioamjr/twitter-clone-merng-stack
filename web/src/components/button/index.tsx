import * as S from "./styled";

export type CustomProps = {
  variant?: "ghost" | "danger";
  rounded?: boolean;
  noPadding?: boolean;
};

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;

const Button = ({ children, ...props }: Props): JSX.Element => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
