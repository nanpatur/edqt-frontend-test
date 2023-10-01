import styled from "styled-components";
import { CardStyledProps } from "./types";

export const CardStyled = styled.div<CardStyledProps>`
  width: 100%;
  padding: ${({ padding }) => padding || 24}px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12) inset;
  border-radius: 8px;
  border: 1px solid
    ${({ active, theme }) =>
      active ? theme.colors.purple : theme.colors.cloudGray};
`;
