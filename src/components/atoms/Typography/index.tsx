import { TypographyStyled } from "./styled";
import { TypographyProps, TypographyStyledProps } from "./types";

const Typography: React.FC<TypographyProps> = ({
  children,
  $size = 16,
  $weight = "normal",
  $color = "black",
  $fontFamily = "SF Pro Display",
}) => {
  const styledProps: TypographyStyledProps = {
    $size,
    $weight,
    $color,
    $fontFamily,
  };

  return <TypographyStyled {...styledProps}>{children}</TypographyStyled>;
};

export default Typography;
