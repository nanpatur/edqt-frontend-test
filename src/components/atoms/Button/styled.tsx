import styled from "styled-components";
import { ButtonStyledProps } from "./types";

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.colors.purple : "transparent"};
  border: ${({ $variant, theme }) =>
    $variant === "secondary" ? "1px solid " + theme.colors.purple : "none"};
  border-radius: 8px;
  color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.colors.white : theme.colors.purple};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  padding: ${({ $padding }) =>
    !!$padding
      ? Array.isArray($padding)
        ? $padding.map((p) => String(p) + "px").join(" ")
        : `${$padding}px` || "0"
      : "10px 16px"};
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.cloudGray};
    color: ${({ theme }) => theme.colors.steelGray};
    border: none;
  }
`;
