import { ContainerStyled } from "./styled";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};

export default Container;
