import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface Option {
  id: string | number;
  value: string;
}
interface OptionsProps {
  options: Option[];
  open?: boolean;
  disabled?: boolean;
  value?: Option;
  defaultValue?: Option;
  onChange?: (value: Option) => void;
}

export function Select({
  options,
  defaultValue,
  open,
  disabled,
  onChange,
}: OptionsProps) {
  const [value, setValue] = useState<Option | undefined>(defaultValue);
  const [areOptionsVisible, setAreOptionsVisible] = useState(open ?? false);
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
    <div className="select-wrapper">
      <div className="select-input-wrapper">
        <input
          className="select-input"
          type="text"
          value={value?.value ?? ""}
          onChange={() => {}}
          onClick={() => setAreOptionsVisible(!areOptionsVisible)}
          disabled={Boolean(disabled)}
        />
      </div>
      {areOptionsVisible && (
        <div ref={dropdownRef} className="select-dropdown">
          {options.map((option) => (
            <option
              className={`select-option ${
                value?.id === option.id ? "selected" : ""
              }`}
              onClick={() => {
                setValue(option);
                setAreOptionsVisible(false);
                onChange?.(option);
              }}
            >
              {option.value}
            </option>
          ))}
        </div>
      )}
    </div>
  );
}
