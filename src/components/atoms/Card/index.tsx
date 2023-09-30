import { CardStyled } from "./styled";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <CardStyled {...props}>{children}</CardStyled>;
};

export default Card;
