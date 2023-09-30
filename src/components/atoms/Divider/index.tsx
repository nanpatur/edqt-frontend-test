import DividerStyled from "./styled";
import { DividerProps } from "./types";

const Divider: React.FC<DividerProps> = (props) => {
  return <DividerStyled {...props} />;
};

Divider.defaultProps = {
  direction: "horizontal",
};

export default Divider;
