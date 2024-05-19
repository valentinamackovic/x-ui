import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface Item {
  id: string | number;
  value: string | number;
}

interface MenuProps {
  open?: boolean;
  onClose?: () => void;
  disabledItems?: string[] | number[];
  items: Item[];
  onItemClick?: (id: string | number) => void;
  onButtonClick?: () => void;
  children: React.ReactNode;
  isStatic?: boolean;
  // selectedItem???
}

export function Menu({
  disabledItems,
  items,
  onItemClick,
  onButtonClick,
  children,
  open,
  onClose,
  isStatic,
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
      <button className="menu-button" onClick={onMenuButtonClick}>
        {children}
      </button>
      {areOptionsVisible && (
        <div ref={dropdownRef} className="menu-dropdown">
          {items.map((item) => {
            const disabledIndex = disabledItems?.findIndex(
              (disabledItem: string | number) => item.id === disabledItem
            );
            console.log({ item, disabledItems, disabledIndex });

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
    </div>
  );
}
