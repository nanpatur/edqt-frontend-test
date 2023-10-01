import styled from "styled-components";
import { InputFieldStyledProps } from "./types";

export const InputFieldStyled = styled.input<InputFieldStyledProps>`
  width: ${({ $width }) => $width || "100%"};
  height: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.steelGray};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  outline-color: ${({ theme }) => theme.colors.purple};
`;

export const InputFieldCheckboxStyled = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.steelGray};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  outline-color: ${({ theme }) => theme.colors.purple};
  accent-color: ${({ theme }) => theme.colors.purple};
`;

export const InputFieldSelectStyled = styled.select`
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.steelGray};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  outline-color: ${({ theme }) => theme.colors.purple};
`;
