import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export interface ReactChildren {
  children: React.ReactNode;
}

export interface Item {
  id: string | number;
  value: string | number;
}

export interface MenuProps {
  open?: boolean;
  onClose?: () => void;
  disabledItems?: string[] | number[];
  items?: Item[];
  onItemClick?: (id: string | number) => void;
  onButtonClick?: () => void;
  children: React.ReactNode;
  isStatic?: boolean;
  component?: boolean;
}

export interface MenuButtonProps extends ReactChildren {
  onMenuButtonClick: () => void;
}

export interface MenuDropdownProps extends ReactChildren {
  open: boolean;
}

export interface MenuItemProps extends ReactChildren {
  item: Item;
  isDisabled?: boolean;
  onClick: (id: string | number) => void;
}

Menu.Button = ({ onMenuButtonClick, children }: MenuButtonProps) => {
  return (
    <button className="menu-button" onClick={onMenuButtonClick}>
      {children}
    </button>
  );
};

Menu.Dropdown = ({ open, children }: MenuDropdownProps) => {
  if (!open) return <></>;

  return <div className="menu-dropdown">{children}</div>;
};

Menu.Item = ({ item, isDisabled, onClick, children }: MenuItemProps) => {
  return (
    <div
      key={item.id}
      className={`menu-option ${isDisabled ? "disabled" : ""}`}
      onClick={() => !isDisabled && onClick?.(item.id)}
    >
      {children}
    </div>
  );
};

export function Menu({
  disabledItems,
  items,
  onItemClick,
  onButtonClick,
  children,
  open,
  onClose,
  isStatic,
  component,
}: MenuProps) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(open ?? false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    open !== undefined && setAreOptionsVisible(open);
  }, [open]);

  const close = () => {
    !isStatic && setAreOptionsVisible(false);
    onClose?.();
  };

  const onMenuButtonClick = () => {
    !isStatic && setAreOptionsVisible(!areOptionsVisible);
    onButtonClick?.();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) close(); // ESC key
    };

    // Add when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="menu-wrapper">
      {component ? (
        <>
          <button className="menu-button" onClick={onMenuButtonClick}>
            {children}
          </button>
          {areOptionsVisible && (
            <div ref={dropdownRef} className="menu-dropdown">
              {items?.map((item) => {
                const disabledIndex = disabledItems?.findIndex(
                  (disabledItem: string | number) => item.id === disabledItem
                );

                const isDisabled =
                  disabledIndex !== undefined ? disabledIndex > -1 : false;

                return (
                  <div
                    key={item.id}
                    className={`menu-option ${isDisabled ? "disabled" : ""}`}
                    onClick={() => !isDisabled && onItemClick?.(item.id)}
                  >
                    {item.value}
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        children
      )}
    </div>
  );
}
