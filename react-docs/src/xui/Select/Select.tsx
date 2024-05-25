import { useEffect, useRef, useState } from "react";
import "./styles.css";

export interface ReactChildren {
  children?: React.ReactNode;
}

export interface Option {
  id: string | number;
  value: string;
}

export interface OptionsProps extends ReactChildren {
  options?: Option[];
  open?: boolean;
  disabled?: boolean;
  value?: Option;
  defaultValue?: Option;
  onChange?: (value: Option) => void;
  component?: boolean;
}

export interface SelectInputProps {
  onClick: () => void;
  value: Option;
  disabled?: boolean;
}

export interface SelectDropdownProps extends ReactChildren {
  visible: boolean;
}

export interface SelectOptionProps extends ReactChildren {
  onClick: () => void;
  selected?: boolean;
}

Select.Input = ({ value, onClick, disabled }: SelectInputProps) => {
  return (
    <div className="select-input-wrapper">
      jjj
      <input
        className="select-input"
        type="text"
        value={value?.value ?? ""}
        onChange={() => {}}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
};

Select.Dropdown = ({ children, visible }: SelectDropdownProps) => {
  if (!visible) return <></>;
  return <div className="select-dropdown">{children}</div>;
};

Select.Option = ({
  onClick,
  children,
  selected,
  ...props
}: SelectOptionProps) => {
  return (
    <option
      className={`select-option ${Boolean(selected) ? "selected" : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </option>
  );
};

export function Select({
  options,
  defaultValue,
  open,
  disabled,
  onChange,
  component,
  children,
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
      {!component ? (
        <>
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
              {options?.map((option) => (
                <option
                  key={option.id}
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
        </>
      ) : (
        children
      )}
    </div>
  );
}
