import { ButtonStyled } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (
  { children, prefix, suffix, ...props } = { variant: "primary" },
) => {
  return (
    <ButtonStyled {...props}>
      {prefix}
      {children}
      {suffix}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
