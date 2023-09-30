import styled from "styled-components";
import { DividerStyledProps } from "./types";

export const DividerStyled = styled.div<DividerStyledProps>`
  width: ${({ direction }) => (direction === "vertical" ? "1px" : "100%")};
  height: ${({ direction }) => (direction === "horizontal" ? "1px" : "auto")};
  background-color: ${({ theme }) => theme.colors.steelGray};
`;
