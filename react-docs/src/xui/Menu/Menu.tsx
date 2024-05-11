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
  selectedItem?: Item;
  items: Item[];
  onItemClick?: (id: string | number) => void;
  children: React.ReactNode;
}

export function Menu({
  disabledItems,
  selectedItem,
  items,
  onItemClick,
  children,
}: MenuProps) {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAreOptionsVisible(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) setAreOptionsVisible(false); // ESC key
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
      <button
        className="menu-button"
        onClick={() => setAreOptionsVisible(!areOptionsVisible)}
      >
        {children}
      </button>
      {areOptionsVisible && (
        <div ref={dropdownRef} className="menu-dropdown">
          {items.map((item) => (
            <div className="menu-option" onClick={() => onItemClick?.(item.id)}>
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
