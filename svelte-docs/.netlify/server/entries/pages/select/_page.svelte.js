import { c as create_ssr_component, b as spread, d as escape_object, f as add_attribute, h as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { E as Example, C as ComponentApiTable } from "../../../chunks/ComponentApiTable.js";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { defaultValue = void 0 } = $$props;
  let { valueProp = void 0 } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { onChange = (v) => {
  } } = $$props;
  let { onInputClick = () => {
  } } = $$props;
  let { component = false } = $$props;
  let { isStatic = false } = $$props;
  let value = options?.find((option) => option.id === defaultValue);
  let areOptionsVisible = open;
  let dropdownRef;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.valueProp === void 0 && $$bindings.valueProp && valueProp !== void 0)
    $$bindings.valueProp(valueProp);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.onInputClick === void 0 && $$bindings.onInputClick && onInputClick !== void 0)
    $$bindings.onInputClick(onInputClick);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0)
    $$bindings.isStatic(isStatic);
  {
    if (open !== void 0) {
      areOptionsVisible = open;
    }
  }
  {
    if (valueProp !== void 0) {
      value = valueProp;
    }
  }
  return `<div${spread([{ class: "select-wrapper" }, escape_object($$props)], {})}>${component ? `<div class="select-input-wrapper"><input class="select-input" type="text"${add_attribute("value", value?.value ?? "", 0)} ${disabled ? "disabled" : ""} readonly> ${areOptionsVisible ? `<div class="select-dropdown"${add_attribute("this", dropdownRef, 0)}>${each(options, (option) => {
    return `<div class="${"select-option " + escape(option.id === value?.id ? "selected" : "", true)}" tabindex="0" role="button">${escape(option.value)} </div>`;
  })}</div>` : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SelectDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `${open ? `<div${spread([{ class: "select-dropdown" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const SelectInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { disabled = false } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div${spread([{ class: "select-input-wrapper" }, escape_object($$props)], {})}><input class="select-input" type="text"${add_attribute("value", value?.value ?? "", 0)} ${disabled ? "disabled" : ""} readonly></div>`;
});
const SelectOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = false } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div${spread(
    [
      {
        class: "select-option " + escape(selected ? "selected" : "", true)
      },
      { tabindex: "0" },
      { role: "button" },
      escape_object($$props)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const ComposableSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let areOptionsVisible = false;
  let value = void 0;
  function toggleDropdown() {
    areOptionsVisible = !areOptionsVisible;
  }
  function selectOption(option) {
    value = option;
    areOptionsVisible = false;
  }
  return `${validate_component(Select, "Select").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SelectInput, "SelectInput").$$render($$result, { onClick: toggleDropdown, value }, {}, {
        default: () => {
          return `${escape(value?.value)}`;
        }
      })} ${validate_component(SelectDropdown, "SelectDropdown").$$render($$result, { open: areOptionsVisible }, {}, {
        default: () => {
          return `${validate_component(SelectOption, "SelectOption").$$render(
            $$result,
            {
              onClick: () => selectOption({ value: "Option 1", id: "1" })
            },
            {},
            {
              default: () => {
                return `Option 1`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
const api = [
  {
    prop: "component",
    description: "If the value is false only children of the main component will be rendered",
    type: "boolean",
    default: "false"
  },
  {
    prop: "isStatic",
    description: "If true the components becomes a shell and ignores all the internal logic",
    type: "boolean",
    default: "false"
  },
  {
    prop: "options",
    description: "Select options",
    type: "{ id: string | number, value: string }[]",
    default: "[]"
  },
  {
    prop: "open",
    description: "Whether the select dropdown is visible or not",
    type: "boolean",
    default: "false"
  },
  {
    prop: "disabled",
    description: "Whether the select is disabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "valueProp",
    description: "Selected value",
    type: "{ id: string | number, value: string }",
    default: "undefined"
  },
  {
    prop: "defaultValue",
    description: "Initial value",
    type: "{ id: string | number, value: string }",
    default: "undefined"
  },
  {
    prop: "onChange",
    description: "Triggers when the value is changed",
    type: "function",
    default: "(value: { id: string | number, value: string }) => {}"
  },
  {
    prop: "onInputClick",
    description: "Triggers when the input is clicked",
    type: "function",
    default: "() => {}"
  }
];
const inputApi = [
  {
    prop: "value",
    description: "Selected value",
    type: "{ id: string | number, value: string }",
    default: "undefined"
  },
  {
    prop: "onClick",
    description: "Triggers when the input is clicked",
    type: "function",
    default: "() => {}"
  },
  {
    prop: "disabled",
    description: "Whether the select is disabled",
    type: "boolean",
    default: "false"
  }
];
const dropdownApi = [
  {
    prop: "open",
    description: "Whether the select dropdown is visible or not",
    type: "boolean",
    default: "false"
  }
];
const optionApi = [
  {
    prop: "onClick",
    description: "Triggers when the item is clicked",
    type: "function",
    default: "() => {}"
  },
  {
    prop: "selected",
    description: "Whether the option is selected",
    type: "boolean",
    default: "false"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let selectedOption = void 0;
  const items = [
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" }
  ];
  const onInputClick = () => {
    open = !open;
  };
  const onOptionClick = (option) => {
    selectedOption = option;
    open = false;
  };
  return `<h1 class="main-page-content-title" data-svelte-h="svelte-xxqken">Select</h1> <p data-svelte-h="svelte-fhvc11">A dropdown for displaying choices.</p> <h2 data-svelte-h="svelte-1978del">Examples</h2> <h3 data-svelte-h="svelte-1olpnd9">Use as a component</h3> <p data-svelte-h="svelte-4oauk4">Basic example</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Select, "Select").$$render($$result, { options: items, component: true }, {}, {})}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1yn5y7q">Initial state set to open</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Select, "Select").$$render(
        $$result,
        {
          options: items,
          component: true,
          open: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1ppuy7c">Initial value set to the first option</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Select, "Select").$$render(
        $$result,
        {
          options: items,
          defaultValue: 1,
          component: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1nnfa8q">Disabled example</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Select, "Select").$$render(
        $$result,
        {
          options: items,
          component: true,
          disabled: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1d8xbtz">Trigger an alert on value change</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Select, "Select").$$render(
        $$result,
        {
          options: items,
          component: true,
          onChange: (v) => window.alert("Changed " + v.value)
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-r4atdp">Ignore the internal logic with static property</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Select, "Select").$$render(
        $$result,
        {
          open,
          onInputClick,
          options: items,
          valueProp: selectedOption,
          onChange: onOptionClick,
          component: true,
          isStatic: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <h3 data-svelte-h="svelte-1p3evk3">Use as a composable</h3> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(ComposableSelect, "ComposableSelect").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })} <div class="component-api"><h2 data-svelte-h="svelte-td9ajj">Component API</h2> <h3 data-svelte-h="svelte-9e6r0c">Select</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: api }, {}, {})} <h3 data-svelte-h="svelte-1w1fsd4">Select Input</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: inputApi }, {}, {})} <h3 data-svelte-h="svelte-18ptdg1">Select Dropdown</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: dropdownApi }, {}, {})} <h3 data-svelte-h="svelte-ae41b9">Select Option</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: optionApi }, {}, {})}</div>`;
});
export {
  Page as default
};
