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
  {
    prop: "enableSearch",
    description: "Whether searching the options is enabled",
    type: "boolean",
    default: "false",
  },
  {
    prop: "onSearch",
    description: "Triggers on each search input change",
    type: "function",
    default: "(value: string) => {}",
  },
  {
    prop: "clearAll",
    description: "Whether clear all selected options is enabled",
    type: "boolean",
    default: "false",
  },
  {
    prop: "maxSelectedItems",
    description: "Number of maximum selected options allowed",
    type: "number",
    default: "undefined",
  },
];

export const inputApi = [
  {
    prop: "inputClick",
    description: "Triggers when the input is clicked",
    type: "function",
    default: "() => {}",
  },
  {
    prop: "disabled",
    description: "Whether the input is disabled",
    type: "boolean",
    default: "false",
  },
  {
    prop: "enableSearch",
    description: "Whether searching the options is enabled",
    type: "boolean",
    default: "false",
  },
  {
    prop: "update:searchValue",
    description: "Triggers on each search input change",
    type: "function",
    default: "(value: string) => {}",
  },
  {
    prop: "searchValue",
    description: "Search value",
    type: "string",
    default: "",
  },
  {
    prop: "clearAllClick",
    description: "Triggered when clear button is clicked",
    type: "function",
    default: "() => {}",
  },
  {
    prop: "clearAll",
    description: "Whether clear all selected options is enabled",
    type: "boolean",
    default: "false",
  },
];

export const dropdownApi = [
  {
    prop: "areOptionsVisible",
    description: "Whether the options are visible",
    type: "boolean",
    default: "false",
  },
];

export const optionApi = [
  {
    prop: "disabled",
    description: "Whether the input is disabled",
    type: "boolean",
    default: "false",
  },
  {
    prop: "selected",
    description: "Whether the input is selected",
    type: "boolean",
    default: "false",
  },
];
