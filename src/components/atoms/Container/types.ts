export interface ContainerStyledProps {
  padding?: number | number[];
  shadow?: "none" | "sm" | "md" | "lg";
  display?: "flex" | "block" | "inline-block" | "inline-flex";
  gap?: number;
}

export interface ContainerProps
  extends React.PropsWithChildren,
    ContainerStyledProps {}
