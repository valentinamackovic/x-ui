export const api = [
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
    prop: "options",
    description: "Select options",
    type: "{ id: string | number, value: string }[]",
    default: "[]",
  },
  {
    prop: "open",
    description: "Whether the select dropdown is visible or not",
    type: "boolean",
    default: "false",
  },
  {
    prop: "disabled",
    description: "Whether the select is disabled",
    type: "boolean",
    default: "false",
  },
  {
    prop: "value",
    description: "Selected value",
    type: "{ id: string | number, value: string }",
    default: "undefined",
  },
  {
    prop: "defaultValue",
    description: "Initial value",
    type: "{ id: string | number, value: string }",
    default: "undefined",
  },
  {
    prop: "onChange",
    description: "Triggers when the value is changed",
    type: "function",
    default: "(value: { id: string | number, value: string }) => {}",
  },
  {
    prop: "onInputClick",
    description: "Triggers when the input is clicked",
    type: "function",
    default: "() => {}",
  },
];

export const inputApi = [
  {
    prop: "value",
    description: "Selected value",
    type: "{ id: string | number, value: string }",
    default: "undefined",
  },
  {
    prop: "onClick",
    description: "Triggers when the input is clicked",
    type: "function",
    default: "() => {}",
  },
  {
    prop: "disabled",
    description: "Whether the select is disabled",
    type: "boolean",
    default: "false",
  },
];

export const dropdownApi = [
  {
    prop: "visible",
    description: "Whether the select dropdown is visible or not",
    type: "boolean",
    default: "false",
  },
];

export const optionApi = [
  {
    prop: "onClick",
    description: "Triggers when the item is clicked",
    type: "function",
    default: "() => {}",
  },
  {
    prop: "selected",
    description: "Whether the option is selected",
    type: "boolean",
    default: "false",
  },
];
