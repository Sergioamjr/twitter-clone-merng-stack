import * as S from "./styled";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props): JSX.Element => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
