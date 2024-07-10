export interface Option {
  id: string | number;
  value: string;
}

export interface OptionsProps extends ReactChildren {
  options?: Option[];
  open?: boolean;
  disabled?: boolean;
  value?: Option;
  defaultValue?: string | number;
  onChange?: (value: Option) => void;
  onInputClick?: () => void;
  component?: boolean;
  isStatic?: boolean;
}
