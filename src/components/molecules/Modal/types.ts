export interface ModalProps extends React.PropsWithChildren {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onOK: () => void;
  onCancel: () => void;
  okLabel?: string;
  cancelLabel?: string;
  okButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  cancelButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
