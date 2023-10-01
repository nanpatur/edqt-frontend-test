import styled from "styled-components";

export const ModalContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cloudGray};
`;

export const ModalContentStyled = styled.div`
  padding: 24px;
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.cloudGray};
`;
