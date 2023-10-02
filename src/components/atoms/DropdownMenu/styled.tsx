import styled from "styled-components";

export const DropdownMenuContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenuTriggerStyled = styled.div`
  cursor: pointer;
`;

export const DropdownMenuItemsContainerStyled = styled.div`
  position: absolute;
  min-width: 160px;
  z-index: 1;
  right: 0;
  top: 36px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.frostGray};
  border-radius: 4px;
  box-shadow: -1px 4px 3px rgba(0, 0, 0, 0.12);
`;

export const DropdownMenuItemStyled = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.frostGray};
  }
`;
