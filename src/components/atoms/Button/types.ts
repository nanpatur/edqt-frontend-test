export interface ButtonStyledProps {
  $variant?: "primary" | "secondary";
  disabled?: boolean;
  $padding?: number;
}

export interface ButtonProps
  extends React.PropsWithChildren,
    ButtonStyledProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
