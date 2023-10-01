export interface CardStyledProps {
  $padding?: number;
  $isActive?: boolean;
}

export interface CardProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement>,
    CardStyledProps {}
