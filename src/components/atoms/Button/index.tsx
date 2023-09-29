import { ButtonStyled } from "./styled";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;
