import { ComponentApiDefinition } from "../../components/ComponentApiTable";

export const api: ComponentApiDefinition[] = [
  {
    prop: "component",
    description:
      "If the value is false only children of the main component will be rendered",
    type: "boolean",
    default: "false",
  },
  {
    prop: "isStatic",
    description:
      "If true the components becomes a shell and ignores all the internal logic",
    type: "boolean",
    default: "false",
  },
  {
    prop: "open",
    description: "Whether or not the menu is open",
    type: "boolean",
    default: "false",
  },
  {
    prop: "items",
    description: "Menu items",
    type: "{ id: number | string, value: string }[]",
    default: "[]",
  },
  {
    prop: "disabledItems",
    description: "Disabled menu items",
    type: "number[] | string[]",
    default: "[]",
  },
  {
    prop: "onClose",
    description: "Triggers when the dropdown menu is closed",
    type: "function",
    default: "() => {}",
  },
  {
    prop: "onItemClick",
    description: "Triggers when a menu item is clicked",
    type: "function",
    default: "(id: string | number) => {}",
  },
  {
    prop: "onButtonClick",
    description: "Triggers when the menu button is clicked",
    type: "function",
    default: "() => {}",
  },
];