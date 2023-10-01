import {
  InputFieldCheckboxStyled,
  InputFieldSelectStyled,
  InputFieldStyled,
} from "./styled";
import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({ type, options, ...props }) => {
  switch (type) {
    case "checkbox":
      return <InputFieldCheckboxStyled type={type} {...props} />;
    case "select":
      return (
        <InputFieldSelectStyled {...props}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </InputFieldSelectStyled>
      );
    default:
      return <InputFieldStyled type={type} {...props} />;
  }
};

export default InputField;
