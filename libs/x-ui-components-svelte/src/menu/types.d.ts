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

export interface Item {
  id: string | number;
  value: string | number;
}

export interface MenuButtonProps {
  onMenuButtonClick: () => void;
}
