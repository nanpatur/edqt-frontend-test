export interface IconStyledProps {
  size?: number;
  icon:
    | "dot"
    | "download"
    | "edit"
    | "eye"
    | "left-arrow"
    | "pin-location"
    | "plus"
    | "time-circle"
    | "video";
}

export interface IconProps extends IconStyledProps {}
