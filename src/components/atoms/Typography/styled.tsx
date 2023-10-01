import styled from "styled-components";
import { TypographyStyledProps } from "./types";

export const TypographyStyled = styled.span<TypographyStyledProps>`
  font-family: ${({ fontFamily }) => fontFamily}, sans-serif;
  font-size: ${({ size }) => `${size}px` || "16px"};
  font-weight: ${({ $weight }) => $weight || 500};
  color: ${({ theme, color }) => theme.colors[color || "black"]};
  text-align: ${({ align }) => align || "left"};
  line-height: "24px";
  letter-spacing: "0.5%";
`;
