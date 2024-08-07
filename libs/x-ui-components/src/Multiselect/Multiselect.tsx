import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { MdClose } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

export interface ReactChildren {
  children?: React.ReactNode;
}
export interface Option {
  id: string | number;
  value: string;
}
export interface MultiselectProps extends ReactChildren {
  options?: Option[];
  open?: boolean;
  disabled?: boolean;
  value?: Option[];
  defaultValue?: string[] | number[];
  onChange?: (value: Option[], newlyAdded: Option) => void;
  onInputClick?: () => void;
  isStatic?: boolean;
  enableSearch?: boolean;
  onSearch?: (value: string) => boolean;
  clearAll?: boolean;
  maxSelectedItems?: number;
  component?: boolean;
}

export interface MultiselectInputProps extends ReactChildren {
  onInputClick: () => void;
  onClearAllClick?: () => void;
  enableSearch?: boolean;
  onSearch?: (value: string) => boolean;
  clearAll?: boolean;
  disabled?: boolean;
  searchValue?: string;
}

Multiselect.Input = ({
  clearAll,
  disabled,
  onInputClick,
  enableSearch,
  onSearch,
  searchValue,
  children,
  onClearAllClick,
  ...props
}: MultiselectInputProps) => {
  return (
    <div
      className={`multiselect-input-wrapper ${clearAll && "clear-all-enabled"}`}
      {...props}
    >
      <section
        className={`multiselect-input-section ${
          clearAll && "clear-all-enabled"
        }`}
        onClick={() => {
          !disabled && onInputClick?.();
        }}
      >
        <section className="multiselect-input-items">{children}</section>
        {enableSearch && (
          <input
            size={
              searchValue && searchValue?.length > 0 ? searchValue.length : 1
            }
            className="multiselect-input"
            type="text"
            value={searchValue}
            onChange={(e) => onSearch?.(e.target.value)}
          />
        )}
        {clearAll && (
          <button className="multiselect-input-item-x-btn clear-all-enabled">
            <IoCloseCircle onClick={onClearAllClick} />
          </button>
        )}
      </section>
    </div>
  );
};

export interface MultiselectItemProps extends ReactChildren {
  onClick: () => void;
}
Multiselect.Item = ({ onClick, children, ...props }: MultiselectItemProps) => {
  return (
    <section className="multiselect-input-item" {...props}>
      {children}
      <button className="multiselect-input-item-x-btn" onClick={onClick}>
        <MdClose />
      </button>
    </section>
  );
};

export interface MultiselectDropdownProps extends ReactChildren {
  areOptionsVisible: boolean;
}
Multiselect.Dropdown = ({
  areOptionsVisible,
  children,
  ...props
}: MultiselectDropdownProps) => {
  if (areOptionsVisible) {
    return (
      <div className="multiselect-dropdown" {...props}>
        {children}
      </div>
    );
  }

  return <></>;
};

export interface MultiselectOptionProps extends ReactChildren {
  disabled?: boolean;
  selected?: boolean;
  onClick: () => void;
}
Multiselect.Option = ({
  disabled,
  selected,
  onClick,
  children,
  ...props
}: MultiselectOptionProps) => {
  return (
    <option
      className={`${disabled ? "disabled" : ""} multiselect-option ${
        selected ? "selected" : ""
      }`}
      onClick={() => onClick()}
      {...props}
    >
      {children}
    </option>
  );
};

export function Multiselect({
  options = [],
  defaultValue,
  open,
  disabled,
  onChange,
  onInputClick,
  isStatic,
  value: valueProp,
  enableSearch,
  clearAll,
  maxSelectedItems,
  component,
  children,
  ...props
}: MultiselectProps) {
  const [searchValue, setSearchValue] = useState("");
  const initialValue = options.filter((option) =>
    defaultValue != undefined
      ? // @ts-ignore
        defaultValue.includes(option.id)
      : false
  );
  const [value, setValue] = useState<Option[]>(initialValue);
  const [areOptionsVisible, setAreOptionsVisible] = useState(open ?? false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const maxSelectionReached =
    maxSelectedItems && value?.length >= maxSelectedItems;

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

    if (!maxSelectionReached || (alreadySelected && maxSelectionReached)) {
      if (!isStatic) {
        setValue(newValue);
        setAreOptionsVisible(false);
      }
      setSearchValue("");
      onChange?.(newValue, option);
    }
  };

  const unselectOption = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    option: Option
  ) => {
    event.stopPropagation();
    const newValue = value.filter((val) => val.id !== option.id);
    setValue(newValue);
  };

  const onSearch = (searchValue: string) => {
    setAreOptionsVisible(true);
    setSearchValue(searchValue);
  };

  const clearAllSelectedOptions = (e: any) => {
    e.stopPropagation();
    setValue([]);
  };

  const visibleOptions =
    enableSearch && searchValue !== undefined && searchValue !== ""
      ? options?.filter((option) =>
          option.value.toLowerCase().includes(searchValue.toLowerCase())
        )
      : options;

  return (
    <div className="multiselect-wrapper" {...props}>
      {component ? (
        <>
          <div
            className={`multiselect-input-wrapper ${
              clearAll && "clear-all-enabled"
            }`}
          >
            <section
              className={`multiselect-input-section ${
                clearAll && "clear-all-enabled"
              }`}
              onClick={() => {
                !disabled &&
                  !isStatic &&
                  setAreOptionsVisible(!areOptionsVisible);
                !disabled && onInputClick?.();
              }}
            >
              <section className="multiselect-input-items">
                {value.map((v) => (
                  <section className="multiselect-input-item">
                    {v.value}
                    <button
                      className="multiselect-input-item-x-btn"
                      onClick={(e) => !disabled && unselectOption(e, v)}
                    >
                      <MdClose />
                    </button>
                  </section>
                ))}
              </section>
              {enableSearch && (
                <input
                  size={searchValue?.length > 0 ? searchValue.length : 1}
                  className="multiselect-input"
                  type="text"
                  value={searchValue}
                  onChange={(e) => onSearch(e.target.value)}
                />
              )}
              {clearAll && (
                <button className="multiselect-input-item-x-btn clear-all-enabled">
                  <IoCloseCircle onClick={clearAllSelectedOptions} />
                </button>
              )}
            </section>
          </div>
          {areOptionsVisible && (
            <div ref={dropdownRef} className="multiselect-dropdown">
              {visibleOptions.map((option) => (
                <option
                  key={option.id}
                  className={`${
                    maxSelectionReached ? "disabled" : ""
                  } multiselect-option ${
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
        </>
      ) : (
        children
      )}
    </div>
  );
}
