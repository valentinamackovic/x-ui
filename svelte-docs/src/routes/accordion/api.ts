import type { ComponentApiDefinition } from "../../components/types";

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
    prop: "expanded",
    description: "Whether accordion is expanded",
    type: "boolean",
    default: "false",
  },
  {
    prop: "title",
    description: "Title of the collapsable section",
    type: "string",
    default: "",
  },
  {
    prop: "onTitleClick",
    description: "Triggers when the title is clicked",
    type: "function",
    default: "() => {}",
  },
];

export const buttonApi: ComponentApiDefinition[] = [
  {
    prop: "onClick",
    description: "Triggers when the title is clicked",
    type: "function",
    default: "() => {}",
  },
];

export const contentApi: ComponentApiDefinition[] = [
  {
    prop: "expanded",
    description: "Whether the content is visible",
    type: "boolean",
    default: "false",
  },
];
