export interface ButtonStyledProps {
  variant?: "primary" | "secondary";
}

export interface ButtonProps
  extends React.PropsWithChildren,
    ButtonStyledProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
