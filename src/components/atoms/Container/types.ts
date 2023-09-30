export interface ContainerStyledProps {
  padding?: number | number[];
  shadow?: "none" | "sm" | "md" | "lg";
  display?: "flex" | "block" | "inline-block" | "inline-flex";
  gap?: number;
  background?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
}

export interface ContainerProps
  extends React.PropsWithChildren,
    ContainerStyledProps {}
