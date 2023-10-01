import { ButtonStyled } from "./styled";
import { ButtonProps, ButtonStyledProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  children,
  prefix,
  suffix,
  onClick,
  $variant = "primary",
  $padding,
  disabled,
}) => {
  const styledProps: ButtonStyledProps = {
    $variant,
    $padding,
    disabled,
  };

  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <ButtonStyled onClick={handleOnClick} {...styledProps}>
      {prefix}
      {children}
      {suffix}
    </ButtonStyled>
  );
};

export default Button;
