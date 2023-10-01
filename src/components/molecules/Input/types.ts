import { InputFieldProps } from "@/components/atoms/InputField/types";

export interface InputProps extends React.PropsWithChildren, InputFieldProps {
  label: string;
  required?: boolean;
}
