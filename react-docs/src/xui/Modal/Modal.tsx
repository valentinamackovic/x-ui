import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export interface ReactChildren {
  children: React.ReactNode;
}
export interface ModalProps extends ReactChildren {
  isOpen?: boolean;
  onClose?: () => void;
  component?: boolean;
}
export interface ButtonProps extends ReactChildren {
  onClick: () => void;
}

Modal.Content = ({ children }: ReactChildren) => {
  return (
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};
Modal.Title = ({ children }: ReactChildren) => {
  return <div className="modal-title">{children}</div>;
};
Modal.Button = ({ children, onClick: onButtonClick }: ButtonProps) => {
  return (
    <button className="modal-button" onClick={() => onButtonClick()}>
      {children}
    </button>
  );
};

export function Modal({ isOpen, onClose, children, component }: ModalProps) {
  const [open, setOpen] = useState<boolean>(isOpen ?? false);

  useEffect(() => {
    isOpen !== undefined && setOpen(isOpen);
  }, [isOpen]);

  const close = () => {
    setOpen(false);
    onClose?.();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) close(); // ESC key
    };

    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).id === "modal-backdrop") close();
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div id="modal-backdrop" className="modal-backdrop">
      {component ? (
        <Modal.Content>
          <Modal.Title>Title</Modal.Title>
          {children}
          <div className="modal-footer">
            <Modal.Button onClick={close}>OK</Modal.Button>
          </div>
        </Modal.Content>
      ) : (
        children
      )}
    </div>,
    document.body
  );
}
