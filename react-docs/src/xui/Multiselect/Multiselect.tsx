import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface Option {
  id: string | number;
  value: string;
}
interface MultiselectProps {
  options: Option[];
  open?: boolean;
  disabled?: boolean;
  value?: Option[];
  defaultValue?: Option[];
  onChange?: (value: Option[], newlyAdded: Option) => void;
}

export function Multiselect({
  options,
  defaultValue,
  open,
  disabled,
  onChange,
}: MultiselectProps) {
  const [value, setValue] = useState<Option[]>([]);
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

  const onOptionClick = (option: Option) => {
    const alreadySelected = value.find((val) => val.id === option.id);
    const newValue =
      alreadySelected === undefined
        ? [...value, option]
        : value.filter((val) => val.id !== alreadySelected.id);
    setValue(newValue);
    setAreOptionsVisible(false);
    onChange?.(newValue, option);
  };

  const inputValue = value.reduce(
    (accumulator, item, i) =>
      i >= 1 ? (accumulator += `, ${item.value}`) : (accumulator += item.value),
    ""
  );

  return (
    <div className="multiselect-wrapper">
      <div className="multiselect-input-wrapper">
        <input
          className="multiselect-input"
          type="text"
          value={inputValue}
          onChange={() => {}}
          onClick={() => setAreOptionsVisible(!areOptionsVisible)}
          disabled={Boolean(disabled)}
        />
      </div>
      {areOptionsVisible && (
        <div ref={dropdownRef} className="multiselect-dropdown">
          {options.map((option) => (
            <option
              className={`multiselect-option ${
                value.find((val) => val.id === option.id) !== undefined
                  ? "selected"
                  : ""
              }`}
              onClick={() => onOptionClick(option)}
            >
              {option.value}
            </option>
          ))}
        </div>
      )}
    </div>
  );
}
