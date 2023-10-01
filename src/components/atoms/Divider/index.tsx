import { DividerStyled } from "./styled";
import { DividerProps, DividerStyledProps } from "./types";

const Divider: React.FC<DividerProps> = ({ $direction = "horizontal" }) => {
  const styledProps: DividerStyledProps = {
    $direction,
  };
  return <DividerStyled {...styledProps} />;
};

export default Divider;
