export interface CardStyledProps {
  padding?: number;
  active?: boolean;
}

export interface CardProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement>,
    CardStyledProps {}
