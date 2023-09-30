import { ButtonStyled } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (
  { children, ...props } = { variant: "primary" },
) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
