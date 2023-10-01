export interface TypographyStyledProps {
  $size?: 12 | 14 | 16 | 18 | 20 | 24 | 32;
  $weight?: string | number;
  $color?:
    | "purple"
    | "white"
    | "black"
    | "slateGray"
    | "steelGray"
    | "cloudGray"
    | "frostGray";
  $align?: "left" | "center" | "right";
  $fontFamily?: "SF Pro Display" | "Poppins";
}

export interface TypographyProps
  extends React.PropsWithChildren,
    TypographyStyledProps {
  as?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
