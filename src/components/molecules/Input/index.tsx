import Container from "@/components/atoms/Container";
import { InputProps } from "./types";
import Typography from "@/components/atoms/Typography";
import InputField from "@/components/atoms/InputField";

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  required,
  type,
  id,
  name,
  onChange,
  options,
  children,
}) => {
  let flexDirection: "column" | "row" = "column";
  let alignItems: "flex-start" | "center" = "flex-start";
  switch (type) {
    case "checkbox":
      flexDirection = "row";
      alignItems = "center";
      break;
  }

  return (
    <Container
      $display="flex"
      $flexDirection={flexDirection}
      $gap={4}
      $alignItems={alignItems}
    >
      <Typography as="label" $size={16} $weight={500}>
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </Typography>
      {children ? (
        children
      ) : (
        <InputField
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          required={required}
          onChange={onChange}
          options={options}
        />
      )}
    </Container>
  );
};

export default Input;
