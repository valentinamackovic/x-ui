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
    prop: "isOpen",
    description: "Whether the modal is visible or not",
    type: "boolean",
    default: "false",
  },
  {
    prop: "title",
    description: "Title of the modal",
    type: "string",
    default: "",
  },
  {
    prop: "onClose",
    description: "Triggers when the modal is closed",
    type: "function",
    default: "() => {}",
  },
];
