import { TypographyStyled } from "./styled";
import { TypographyProps } from "./types";

const Typography: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <TypographyStyled {...props}>{children}</TypographyStyled>;
};

Typography.defaultProps = {
  size: 16,
  $weight: "normal",
  color: "black",
  fontFamily: "SF Pro Display",
};

export default Typography;
