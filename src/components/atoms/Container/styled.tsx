import styled from "styled-components";
import { ContainerStyledProps } from "./types";

const ContainerStyled = styled.div<ContainerStyledProps>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ padding }) =>
    Array.isArray(padding)
      ? padding.map((p) => String(p) + "px").join(" ")
      : `${padding}px` || "0"};
  box-shadow: ${({ shadow }) => {
    switch (shadow) {
      case "sm":
        return "0px 2px 14px rgba(38.50, 26.27, 73.31, 0.05)";
      case "md":
        return "0px 3px 24px rgba(38.50, 26.27, 73.31, 0.05)";
      case "lg":
        return "0px 4px 32px rgba(38.50, 26.27, 73.31, 0.05)";
      default:
        return "none";
    }
  }};
  display: ${({ display }) => display || "block"};
  gap: ${({ gap }) => gap || "0"}px;
  background-color: ${({ background, theme }) =>
    background || theme.colors.white};
`;

export default ContainerStyled;
