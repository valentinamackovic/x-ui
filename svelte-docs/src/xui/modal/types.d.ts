export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  component?: boolean;
  isStatic?: boolean;
  title?: string;
}
export interface ButtonProps {
  onClick: () => void;
}
