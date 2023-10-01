export interface IconStyledProps {
  $size?: number;
  $name:
    | "dot"
    | "download"
    | "edit"
    | "eye"
    | "left-arrow"
    | "pin-location"
    | "plus"
    | "time-circle"
    | "video"
    | "drag-handle"
    | "three-dot-v"
    | "three-dot-h"
    | "check"
    | "cross";
  $cursor?: string;
  $activeCursor?: string;
}

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IconStyledProps {}
