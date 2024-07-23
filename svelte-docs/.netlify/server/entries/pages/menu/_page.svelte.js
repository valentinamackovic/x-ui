import { c as create_ssr_component, b as spread, d as escape_object, f as add_attribute, h as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { E as Example, C as ComponentApiTable } from "../../../chunks/ComponentApiTable.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabledItems = [] } = $$props;
  let { items = [] } = $$props;
  let { onItemClick: onItemClick2 = (id) => {
  } } = $$props;
  let { onButtonClick = () => {
  } } = $$props;
  let { open = false } = $$props;
  let { onClose: onClose2 = () => {
  } } = $$props;
  let { isStatic = false } = $$props;
  let { component = false } = $$props;
  let areOptionsVisible = open ?? false;
  let dropdownRef;
  function isDisabled(item) {
    return disabledItems && disabledItems?.includes(item.id);
  }
  if ($$props.disabledItems === void 0 && $$bindings.disabledItems && disabledItems !== void 0)
    $$bindings.disabledItems(disabledItems);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.onItemClick === void 0 && $$bindings.onItemClick && onItemClick2 !== void 0)
    $$bindings.onItemClick(onItemClick2);
  if ($$props.onButtonClick === void 0 && $$bindings.onButtonClick && onButtonClick !== void 0)
    $$bindings.onButtonClick(onButtonClick);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose2 !== void 0)
    $$bindings.onClose(onClose2);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0)
    $$bindings.isStatic(isStatic);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  {
    if (open !== void 0) {
      areOptionsVisible = open;
    }
  }
  return `<div${spread([{ class: "menu-wrapper" }, escape_object($$props)], {})}>${component ? `<button class="menu-button">${slots.default ? slots.default({}) : ``}</button> ${areOptionsVisible && items ? `<div class="menu-dropdown"${add_attribute("this", dropdownRef, 0)}>${each(items, (item) => {
    return `${isDisabled(item) ? `<div class="menu-option disabled">${escape(item.value)} </div>` : `<div class="menu-option" role="button" tabindex="0">${escape(item.value)} </div>`}`;
  })}</div>` : ``}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onMenuButtonClick } = $$props;
  if ($$props.onMenuButtonClick === void 0 && $$bindings.onMenuButtonClick && onMenuButtonClick !== void 0)
    $$bindings.onMenuButtonClick(onMenuButtonClick);
  return `<button${spread([{ class: "menu-button" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</button>`;
});
const MenuDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `${open ? `<div${spread([{ class: "menu-dropdown" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { isDisabled = false } = $$props;
  let { onClick } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div${spread(
    [
      {
        class: "menu-option " + escape(isDisabled ? "disabled" : "", true)
      },
      { role: "button" },
      { tabindex: "0" },
      escape_object($$props)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css = {
  code: ".center.svelte-1u5fme6{display:flex;justify-content:center;align-items:center}",
  map: null
};
const ComposableMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  function toggleOpen() {
    isOpen = !isOpen;
  }
  function handleItemClick(item) {
    isOpen = false;
    window.alert("Item clicked " + item.value);
  }
  $$result.css.add(css);
  return `<div class="center svelte-1u5fme6">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MenuButton, "MenuButton").$$render($$result, { onMenuButtonClick: toggleOpen }, {}, {
        default: () => {
          return `Composable`;
        }
      })} ${validate_component(MenuDropdown, "MenuDropdown").$$render($$result, { open: isOpen }, {}, {
        default: () => {
          return `${validate_component(MenuItem, "MenuItem").$$render(
            $$result,
            {
              onClick: handleItemClick,
              item: { id: "1", value: "Action 1" }
            },
            {},
            {
              default: () => {
                return `First Action`;
              }
            }
          )}`;
        }
      })}`;
    }
  })} </div>`;
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
    prop: "open",
    description: "Whether or not the menu is open",
    type: "boolean",
    default: "false"
  },
  {
    prop: "items",
    description: "Menu items",
    type: "{ id: number | string, value: string }[]",
    default: "[]"
  },
  {
    prop: "disabledItems",
    description: "Disabled menu items",
    type: "number[] | string[]",
    default: "[]"
  },
  {
    prop: "onClose",
    description: "Triggers when the dropdown menu is closed",
    type: "function",
    default: "() => {}"
  },
  {
    prop: "onItemClick",
    description: "Triggers when a menu item is clicked",
    type: "function",
    default: "(id: string | number) => {}"
  },
  {
    prop: "onButtonClick",
    description: "Triggers when the menu button is clicked",
    type: "function",
    default: "() => {}"
  }
];
const buttonApi = [
  {
    prop: "onMenuButtonClick",
    description: "Triggers when the button is clicked",
    type: "function",
    default: "() => {}"
  }
];
const dropdownApi = [
  {
    prop: "open",
    description: "Whether or not the dropdown is visible",
    type: "boolean",
    default: "false"
  }
];
const itemApi = [
  {
    prop: "item",
    description: "Menu item",
    type: "{ id: number | string, value: string }",
    default: "/ (required)"
  },
  {
    prop: "isDisabled",
    description: "Whether the item is disabled",
    type: "boolean",
    default: "false"
  },
  {
    prop: "onClick",
    description: "Triggers when the item is clicked",
    type: "function",
    default: "(id: string | number) => {}"
  }
];
function onItemClick(id) {
  window.alert("Item clicked:" + id);
}
function onClose() {
  window.alert("Menu closed");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let areOptionsVisible = false;
  let items = [
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" }
  ];
  let disabledItems = [2];
  function onMenuButtonClick() {
    areOptionsVisible = !areOptionsVisible;
  }
  return `<h1 class="main-page-content-title" data-svelte-h="svelte-88vco">Menu</h1> <p data-svelte-h="svelte-bx7cim">A versatile menu for navigation.</p> <h2 data-svelte-h="svelte-1978del">Examples</h2> <h3 data-svelte-h="svelte-1olpnd9">Use as a component</h3> <p data-svelte-h="svelte-4oauk4">Basic example</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Menu, "Menu").$$render($$result, { items, component: true, onItemClick }, {}, {
        default: () => {
          return `Menu Options`;
        }
      })}</div>`;
    }
  })} <p data-svelte-h="svelte-66gp5s">Disabled items</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Menu, "Menu").$$render($$result, { items, component: true, disabledItems }, {}, {
        default: () => {
          return `Menu Options`;
        }
      })}</div>`;
    }
  })} <p data-svelte-h="svelte-1ywdfql">Open set to true</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Menu, "Menu").$$render($$result, { items, component: true, open: true }, {}, {
        default: () => {
          return `Menu Options`;
        }
      })}</div>`;
    }
  })} <p data-svelte-h="svelte-ln2arb">Trigger a function when the menu popup is closed</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Menu, "Menu").$$render($$result, { items, component: true, onClose }, {}, {
        default: () => {
          return `Menu Options`;
        }
      })}</div>`;
    }
  })} <p data-svelte-h="svelte-r4atdp">Ignore the internal logic with static property</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          items,
          component: true,
          onItemClick,
          onButtonClick: onMenuButtonClick,
          open: areOptionsVisible,
          isStatic: true
        },
        {},
        {
          default: () => {
            return `Menu Options`;
          }
        }
      )}</div>`;
    }
  })} <h3 data-svelte-h="svelte-1p3evk3">Use as a composable</h3> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(ComposableMenu, "ComposableMenu").$$render($$result, {}, {}, {})}</div>`;
    }
  })} <div class="component-api"><h2 data-svelte-h="svelte-td9ajj">Component API</h2> <h3 data-svelte-h="svelte-1o7i1cv">Menu</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: api }, {}, {})} <h3 data-svelte-h="svelte-vhmv89">Menu Button</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: buttonApi }, {}, {})} <h3 data-svelte-h="svelte-k3hm8q">Menu Dropdown</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: dropdownApi }, {}, {})} <h3 data-svelte-h="svelte-11sb57c">Menu Item</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: itemApi }, {}, {})}</div>`;
});
export {
  Page as default
};
