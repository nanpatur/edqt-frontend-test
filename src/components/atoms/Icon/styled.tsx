import styled from "styled-components";
import { IconStyledProps } from "./types";

export const IconStyled = styled.div<IconStyledProps>`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  background-image: url(${({ icon }) => `/icons/${icon}.svg`});
  background-size: cover;
  background-repeat: no-repeat;
`;
