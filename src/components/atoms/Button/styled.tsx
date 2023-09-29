import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.purple};
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 16px 24px;
  text-align: center;
  width: 100%;
`;
