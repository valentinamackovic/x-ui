import { c as create_ssr_component, b as spread, d as escape_object, h as each, f as add_attribute, e as escape, j as createEventDispatcher, k as escape_attribute_value, v as validate_component } from "../../../chunks/ssr.js";
import { E as Example, C as ComponentApiTable } from "../../../chunks/ComponentApiTable.js";
const Multiselect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visibleOptions;
  let maxSelectionReached;
  let dropdownOptions;
  let { options = [] } = $$props;
  let { defaultValue = [] } = $$props;
  let { value = [] } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { onChange = () => {
  } } = $$props;
  let { onInputClick = () => {
  } } = $$props;
  let { isStatic = false } = $$props;
  let { enableSearch = false } = $$props;
  let { clearAll = false } = $$props;
  let { maxSelectedItems = void 0 } = $$props;
  let { component = false } = $$props;
  let searchValue = "";
  let expanded = open;
  let selectedValues = defaultValue.map((id) => options.find((option) => option.id === id))?.filter((element) => element !== void 0);
  let dropdownRef;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.onInputClick === void 0 && $$bindings.onInputClick && onInputClick !== void 0)
    $$bindings.onInputClick(onInputClick);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0)
    $$bindings.isStatic(isStatic);
  if ($$props.enableSearch === void 0 && $$bindings.enableSearch && enableSearch !== void 0)
    $$bindings.enableSearch(enableSearch);
  if ($$props.clearAll === void 0 && $$bindings.clearAll && clearAll !== void 0)
    $$bindings.clearAll(clearAll);
  if ($$props.maxSelectedItems === void 0 && $$bindings.maxSelectedItems && maxSelectedItems !== void 0)
    $$bindings.maxSelectedItems(maxSelectedItems);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  {
    if (value !== void 0) {
      selectedValues = value;
    }
  }
  visibleOptions = enableSearch && searchValue ? options.filter((option) => option.value.toLowerCase().includes(searchValue.toLowerCase())) : options;
  maxSelectionReached = maxSelectedItems !== void 0 && selectedValues.length >= maxSelectedItems;
  expanded = open;
  dropdownOptions = visibleOptions.map((option) => ({
    ...option,
    disabled: !selectedValues.some((v) => v.id === option.id) && maxSelectionReached,
    selected: selectedValues.some((v) => v.id === option.id)
  }));
  return `<div${spread([{ class: "multiselect-wrapper" }, escape_object($$props)], {})}>${component ? `<div class="${["multiselect-input-wrapper", clearAll ? "clear-all-enabled" : ""].join(" ").trim()}"><section class="multiselect-input-section" role="button" tabindex="0"><section class="multiselect-input-items">${each(selectedValues, (value2) => {
    return `<div class="multiselect-input-item">${escape(value2.value)} <button class="multiselect-input-item-x-btn" data-svelte-h="svelte-1nq10vd"><svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg></button> </div>`;
  })}</section> ${enableSearch ? `<input class="multiselect-input" type="text"${add_attribute("size", searchValue.length || 1, 0)}${add_attribute("value", searchValue, 0)}>` : ``} ${clearAll ? `<button class="multiselect-input-item-x-btn clear-all-enabled" data-svelte-h="svelte-1omwc2n"><svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></button>` : ``}</section></div> ${expanded ? `<div class="multiselect-dropdown"${add_attribute("this", dropdownRef, 0)}>${each(dropdownOptions, (option) => {
    return `<div class="${[
      "multiselect-option",
      (option.selected ? "selected" : "") + " " + (option.disabled ? "disabled" : "")
    ].join(" ").trim()}" role="button" tabindex="0">${escape(option.value)} </div>`;
  })}</div>` : ``}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const MultiselectDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { areOptionsVisible = false } = $$props;
  let expanded = areOptionsVisible;
  console.log(expanded);
  if ($$props.areOptionsVisible === void 0 && $$bindings.areOptionsVisible && areOptionsVisible !== void 0)
    $$bindings.areOptionsVisible(areOptionsVisible);
  expanded = areOptionsVisible;
  return `${expanded ? `<div${spread([{ class: "multiselect-dropdown" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const MultiselectInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputSize;
  let { clearAll = false } = $$props;
  let { enableSearch = false } = $$props;
  let { searchValue = "" } = $$props;
  let inputValue = searchValue;
  createEventDispatcher();
  if ($$props.clearAll === void 0 && $$bindings.clearAll && clearAll !== void 0)
    $$bindings.clearAll(clearAll);
  if ($$props.enableSearch === void 0 && $$bindings.enableSearch && enableSearch !== void 0)
    $$bindings.enableSearch(enableSearch);
  if ($$props.searchValue === void 0 && $$bindings.searchValue && searchValue !== void 0)
    $$bindings.searchValue(searchValue);
  inputSize = inputValue && inputValue.length > 0 ? inputValue.length : 1;
  return `<div${spread(
    [
      {
        class: escape_attribute_value(["multiselect-input-wrapper", clearAll ? "clear-all-enabled" : ""].join(" "))
      },
      escape_object($$props)
    ],
    {}
  )}><section${add_attribute("class", ["multiselect-input-section", clearAll ? "clear-all-enabled" : ""].join(" "), 0)} role="button" tabindex="0"><section class="multiselect-input-items">${slots.default ? slots.default({}) : ``}</section> ${enableSearch ? `<input class="multiselect-input" type="text"${add_attribute("size", inputSize, 0)}${add_attribute("value", inputValue, 0)}>` : ``} ${clearAll ? `<button class="multiselect-input-item-x-btn clear-all-enabled" data-svelte-h="svelte-wiwml"><svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></button>` : ``}</section></div>`;
});
const MultiselectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<section${spread([{ class: "multiselect-input-item" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``} <button class="multiselect-input-item-x-btn" data-svelte-h="svelte-1lsxt2d"><svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg></button></section>`;
});
const MultiselectOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  let { selected = false } = $$props;
  let { onClick } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${!disabled ? `<div${spread(
    [
      { class: "multiselect-option" },
      { role: "button" },
      { tabindex: "0" },
      escape_object($$props)
    ],
    {
      classes: (selected ? "selected" : "") + " " + (disabled ? "disabled" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const ComposableMultiselect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let values = [];
  const options = [{ value: "Option 1", id: "1" }, { value: "Option 2", id: "2" }];
  const onOptionClick = (option) => {
    const index = values.findIndex((val) => val.id === option.id);
    if (index === -1) {
      values = [...values, option];
    } else {
      values = values.filter((val) => val.id !== option.id);
    }
    open = false;
  };
  return `${validate_component(Multiselect, "Multiselect").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MultiselectInput, "MultiselectInput").$$render($$result, {}, {}, {
        default: () => {
          return `${each(values, (value) => {
            return `${validate_component(MultiselectItem, "MultiselectItem").$$render($$result, { onClick: () => onOptionClick(value) }, {}, {
              default: () => {
                return `${escape(value.value)} `;
              }
            })}`;
          })}`;
        }
      })} ${validate_component(MultiselectDropdown, "MultiselectDropdown").$$render($$result, { areOptionsVisible: open }, {}, {
        default: () => {
          return `${each(options, (option) => {
            return `${validate_component(MultiselectOption, "MultiselectOption").$$render($$result, { onClick: () => onOptionClick(option) }, {}, {
              default: () => {
                return `${escape(option.value)} `;
              }
            })}`;
          })}`;
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
    prop: "value",
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
  },
  {
    prop: "enableSearch",
    description: "Whether searching the options is enabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "clearAll",
    description: "Whether clear all selected options is enabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "maxSelectedItems",
    description: "Number of maximum selected options allowed",
    type: "number",
    default: "undefined"
  }
];
const inputApi = [
  {
    prop: "disabled",
    description: "Whether the input is disabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "enableSearch",
    description: "Whether searching the options is enabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "searchValue",
    description: "Search value",
    type: "string",
    default: ""
  },
  {
    prop: "onClearAll",
    description: "Triggered when clear button is clicked",
    type: "function",
    default: "() => {}"
  },
  {
    prop: "clearAll",
    description: "Whether clear all selected options is enabled",
    type: "boolean",
    default: "false"
  }
];
const itemApi = [
  {
    prop: "onClick",
    description: "Triggered when the item is clciked",
    type: "function",
    default: "() => {}"
  }
];
const dropdownApi = [
  {
    prop: "areOptionsVisible",
    description: "Whether the options are visible",
    type: "boolean",
    default: "false"
  }
];
const optionApi = [
  {
    prop: "disabled",
    description: "Whether the input is disabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "selected",
    description: "Whether the input is selected",
    type: "boolean",
    default: "false"
  },
  {
    prop: "onClick",
    description: "triggered when the option is clicked",
    type: "funtion",
    default: "() => {}"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expanded = false;
  let values = [];
  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
    { id: "4", value: "Option 4" }
  ];
  const onInputClick = () => expanded = !expanded;
  const onOptionClick = (option) => {
    const alreadySelected = values.find((v) => v.id === option.id);
    values = alreadySelected ? values.filter((v) => v.id !== option.id) : [...values, option];
  };
  return `<h1 class="main-page-content-title" data-svelte-h="svelte-xxqken">Select</h1> <p data-svelte-h="svelte-fhvc11">A dropdown for displaying choices.</p> <h2 data-svelte-h="svelte-1978del">Examples</h2> <h3 data-svelte-h="svelte-1olpnd9">Use as a component</h3> <p data-svelte-h="svelte-4oauk4">Basic example</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render($$result, { options, component: true }, {}, {})}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1yn5y7q">Initial state set to open</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render($$result, { options, open: true, component: true }, {}, {})}</div></div>`;
    }
  })} <p data-svelte-h="svelte-171hhr9">Initial value set to the first two options</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render(
        $$result,
        {
          options,
          defaultValue: ["1", "2"],
          component: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1nnfa8q">Disabled example</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render($$result, { options, disabled: true, component: true }, {}, {})}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1d8xbtz">Trigger an alert on value change</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render(
        $$result,
        {
          options,
          onChange: (o) => window.alert("Changed " + o.value),
          component: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1llqj2y">Enable searching the options</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render(
        $$result,
        {
          options,
          enableSearch: true,
          component: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-1ax2ilm">Enable clearing all of the selected options with clear all button</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render($$result, { options, clearAll: true, component: true }, {}, {})}</div></div>`;
    }
  })} <p data-svelte-h="svelte-prmju0">Set the maximum number of selected items</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render(
        $$result,
        {
          options,
          maxSelectedItems: 2,
          component: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-r4atdp">Ignore the internal logic with static property</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(Multiselect, "Multiselect").$$render(
        $$result,
        {
          value: values,
          onChange: onOptionClick,
          open: expanded,
          onInputClick,
          options,
          isStatic: true,
          component: true
        },
        {},
        {}
      )}</div></div>`;
    }
  })} <h3 data-svelte-h="svelte-1p3evk3">Use as a composable</h3> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(ComposableMultiselect, "ComposableMultiselect").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })} <div class="component-api"><h2 data-svelte-h="svelte-td9ajj">Component API</h2> <h3 data-svelte-h="svelte-b5d085">Multiselect</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: api }, {}, {})} <h3 data-svelte-h="svelte-23sf0p">Multiselect Input</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: inputApi }, {}, {})} <h3 data-svelte-h="svelte-1mpdjxo">Multiselect Item</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: itemApi }, {}, {})} <h3 data-svelte-h="svelte-pztyna">Multiselect Dropdown</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: dropdownApi }, {}, {})} <h3 data-svelte-h="svelte-h576qa">Multiselect Option</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: optionApi }, {}, {})}</div>`;
});
export {
  Page as default
};
