import { useState } from "react";
import { ModalProps } from "./types";
import Container from "@/components/atoms/Container";
import Button from "@/components/atoms/Button";
import {
  ModalContainerStyled,
  ModalContentStyled,
  ModalFooterStyled,
  ModalHeaderStyled,
  ModalStyled,
} from "./styled";
import Typography from "@/components/atoms/Typography";

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  subtitle,
  isOpen,
  onOK,
  onCancel,
  okLabel,
  cancelLabel,
  okButtonProps,
  cancelButtonProps,
}) => {
  return (
    isOpen && (
      <ModalContainerStyled>
        <ModalStyled>
          {/* header */}
          <ModalHeaderStyled>
            <Typography $size={18} $weight={600}>
              {title || "Modal"}
            </Typography>
            {subtitle && (
              <Typography $size={12} $color="slateGray">
                {subtitle}
              </Typography>
            )}
          </ModalHeaderStyled>
          {/* content */}
          <ModalContentStyled>{children}</ModalContentStyled>
          {/* footer */}
          <ModalFooterStyled>
            <Button
              onClick={onCancel}
              $variant="secondary"
              disabled={cancelButtonProps?.disabled}
            >
              {cancelLabel || "Cancel"}
            </Button>
            <Button onClick={onOK} disabled={okButtonProps?.disabled}>
              {okLabel || "Submit"}
            </Button>
          </ModalFooterStyled>
        </ModalStyled>
      </ModalContainerStyled>
    )
  );
};

export default Modal;
