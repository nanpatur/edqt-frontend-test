import IconStyled from "./styled";
import { IconProps } from "./types";

const Icon: React.FC<IconProps> = (props) => {
  return <IconStyled {...props} />;
};

export default Icon;
