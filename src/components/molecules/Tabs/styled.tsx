import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import styled from "styled-components";

export const TabLabelContainerStyled = styled(Container)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cloudGray};
`;

interface TabLabelStyledProps {
  $isActive: boolean;
}

export const TabLabelStyled = styled(Typography)<TabLabelStyledProps>`
  cursor: pointer;
  $padding: 0 14px 20px 0;
  border-bottom: ${({ theme, $isActive }) =>
    $isActive ? `2px solid ${theme.colors.purple}` : "none"};
`;
