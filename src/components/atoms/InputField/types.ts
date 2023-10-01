export interface SelectOption {
  label: string;
  value: string;
}

export interface InputFieldStyledProps {
  $width?: string;
}

export interface InputFieldProps extends InputFieldStyledProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  id?: string;
  name?: string;
  required?: boolean;
  options?: SelectOption[];
}
