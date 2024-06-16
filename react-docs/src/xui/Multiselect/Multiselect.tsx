import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { MdClose } from "react-icons/md";

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
  onInputClick?: () => void;
  isStatic?: boolean;
  enableSearch?: boolean;
  onSearch?: (value: string) => boolean;
  clearAll?: boolean;
  maxSelectedItems?: number;
}

export function Multiselect({
  options,
  defaultValue,
  open,
  disabled,
  onChange,
  onInputClick,
  isStatic,
  value: valueProp,
  enableSearch,
}: MultiselectProps) {
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState<Option[]>(defaultValue ?? []);
  const [areOptionsVisible, setAreOptionsVisible] = useState(open ?? false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    open !== undefined && setAreOptionsVisible(open);
  }, [open]);

  useEffect(() => {
    valueProp !== undefined && setValue(valueProp);
  }, [valueProp]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isStatic &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAreOptionsVisible(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isStatic && event.keyCode === 27) setAreOptionsVisible(false); // ESC key
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

    if (!isStatic) {
      setValue(newValue);
      setAreOptionsVisible(false);
    }
    setSearchValue("");
    onChange?.(newValue, option);
  };

  const unselectOption = (option: Option) => {
    const newValue = value.filter((val) => val.id !== option.id);
    setValue(newValue);
  };

  const onSearch = (searchValue: string) => {
    setAreOptionsVisible(true);
    setSearchValue(searchValue);
  };

  const inputValue = value.reduce(
    (accumulator, item, i) =>
      i >= 1 ? (accumulator += `, ${item.value}`) : (accumulator += item.value),
    ""
  );

  const visibleOptions =
    enableSearch && searchValue !== undefined && searchValue !== ""
      ? options?.filter((option) =>
          option.value.toLowerCase().includes(searchValue.toLowerCase())
        )
      : options;

  return (
    <div className="multiselect-wrapper">
      <div className="multiselect-input-wrapper">
        <section
          className="multiselect-input-section"
          onClick={() => {
            !disabled && !isStatic && setAreOptionsVisible(!areOptionsVisible);
            !disabled && onInputClick?.();
          }}
        >
          {value.map((v) => (
            <section className="multiselect-input-item">
              {v.value}
              <button
                className="multiselect-input-item-x-btn"
                onClick={() => !disabled && unselectOption(v)}
              >
                <MdClose colorProfile={1} />
              </button>
            </section>
          ))}
          {enableSearch && (
            <input
              size={searchValue?.length > 0 ? searchValue.length : 1}
              className="multiselect-input"
              type="text"
              value={searchValue}
              onChange={(e) => onSearch(e.target.value)}
            />
          )}
        </section>
      </div>
      {areOptionsVisible && (
        <div ref={dropdownRef} className="multiselect-dropdown">
          {visibleOptions.map((option) => (
            <option
              key={option.id}
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
