import { ButtonStyled } from "./styled";
import { ButtonProps, ButtonStyledProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  prefix,
  suffix,
  $variant = "primary",
  $padding,
  $disabled,
}) => {
  const styledProps: ButtonStyledProps = {
    $variant,
    $padding,
    $disabled,
  };
  return (
    <ButtonStyled {...styledProps}>
      {prefix}
      {children}
      {suffix}
    </ButtonStyled>
  );
};

export default Button;
