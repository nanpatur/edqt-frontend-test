import styled from "styled-components";
import { ButtonStyledProps } from "./types";

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${(props) =>
    props.variant === "primary" ? props.theme.colors.purple : "transparent"};
  border: ${(props) =>
    props.variant === "secondary"
      ? "1px solid " + props.theme.colors.purple
      : "none"};
  border-radius: 8px;
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.white
      : props.theme.colors.purple};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 10px 16px;
  text-align: center;
  cursor: pointer;
`;
