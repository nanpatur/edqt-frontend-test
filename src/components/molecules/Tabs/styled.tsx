import Container from "@/components/atoms/Container";
import styled from "styled-components";

export const TabLabelContainerStyled = styled(Container)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cloudGray};
`;

interface TabLabelStyledProps {
  $isActive: boolean;
}

export const TabLabelItemContainerStyled = styled.div<TabLabelStyledProps>`
  width: fit-content;
  cursor: pointer;
  padding: 0 14px 20px 0;
  border-bottom: ${({ theme, $isActive }) =>
    $isActive ? `2px solid ${theme.colors.purple}` : "none"};
`;
