import { c as create_ssr_component, a as subscribe, b as spread, d as escape_object, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { E as Example, C as ComponentApiTable } from "../../../chunks/ComponentApiTable.js";
import { w as writable } from "../../../chunks/index.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  let { title = "" } = $$props;
  let { isOpen = false } = $$props;
  let { onClose = () => {
  } } = $$props;
  let { component = false } = $$props;
  let { isStatic = false } = $$props;
  const open = writable(isOpen);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0)
    $$bindings.isStatic(isStatic);
  {
    open.set(isOpen);
  }
  $$unsubscribe_open();
  return ` <div${spread(
    [
      { id: "modal-backdrop" },
      { class: "modal-backdrop" },
      { role: "button" },
      { tabindex: "0" },
      escape_object($$props)
    ],
    {
      styles: { "display": $open ? "flex" : "none" }
    }
  )}>${component ? `<div class="modal-content"><div class="modal-title">${escape(title)}</div> ${slots.default ? slots.default({}) : ``} <div class="modal-footer"><button class="modal-button" data-svelte-h="svelte-tca51j">OK</button></div></div>` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const ModalButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onButtonClick } = $$props;
  if ($$props.onButtonClick === void 0 && $$bindings.onButtonClick && onButtonClick !== void 0)
    $$bindings.onButtonClick(onButtonClick);
  return `<button${spread([{ class: "modal-button" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</button>`;
});
const ModalContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${spread([{ class: "modal-content" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css = {
  code: ".center.svelte-ld3e4a{display:flex;justify-content:center;align-items:center}.btn.svelte-ld3e4a{padding:8px 16px;font-size:16px;cursor:pointer}",
  map: null
};
const ComposableModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalOpen = false;
  function closeModal() {
    modalOpen = false;
  }
  $$result.css.add(css);
  return `${validate_component(Modal, "Modal").$$render($$result, { isOpen: modalOpen, onClose: closeModal }, {}, {
    default: () => {
      return `${validate_component(ModalContent, "ModalContent").$$render($$result, {}, {}, {
        default: () => {
          return `<p data-svelte-h="svelte-1abxqpo">Example modal content.</p> ${validate_component(ModalButton, "ModalButton").$$render($$result, { onButtonClick: closeModal }, {}, {
            default: () => {
              return `Customisable Button`;
            }
          })} ${validate_component(ModalButton, "ModalButton").$$render($$result, { onButtonClick: closeModal }, {}, {
            default: () => {
              return `OK`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="center svelte-ld3e4a"><button class="btn svelte-ld3e4a" data-svelte-h="svelte-1i034r7">Open modal</button> </div>`;
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
    prop: "isOpen",
    description: "Whether the modal is visible or not",
    type: "boolean",
    default: "false"
  },
  {
    prop: "title",
    description: "Title of the modal",
    type: "string",
    default: ""
  },
  {
    prop: "onClose",
    description: "Triggers when the modal is closed",
    type: "function",
    default: "() => {}"
  }
];
const buttonApi = [
  {
    prop: "onButtonClick",
    description: "Triggers when the button is clicked",
    type: "function",
    default: "() => {}"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalOpen = false;
  return `<h1 class="main-page-content-title" data-svelte-h="svelte-33ulq2">Modal</h1> <p data-svelte-h="svelte-qj5ca9">Display a modal dialog box, providing a title and content area.</p> <h2 data-svelte-h="svelte-1978del">Examples</h2> <h3 data-svelte-h="svelte-1olpnd9">Use as a component</h3> <p data-svelte-h="svelte-3r0idg">Setting component prop to true will apply default styles.</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center"><button class="btn" data-svelte-h="svelte-1ar0inm">Open modal</button> ${validate_component(Modal, "Modal").$$render(
        $$result,
        {
          title: "Modal title",
          isOpen: modalOpen,
          onClose: () => modalOpen = false,
          component: true
        },
        {},
        {
          default: () => {
            return `Modal`;
          }
        }
      )}</div></div>`;
    }
  })} <p data-svelte-h="svelte-r4atdp">Ignore the internal logic with static property</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center"><button class="btn" data-svelte-h="svelte-1ar0inm">Open modal</button> ${validate_component(Modal, "Modal").$$render(
        $$result,
        {
          title: "Modal title",
          isOpen: modalOpen,
          onClose: () => modalOpen = false,
          component: true,
          isStatic: true
        },
        {},
        {
          default: () => {
            return `Modal`;
          }
        }
      )}</div></div>`;
    }
  })} <h3 data-svelte-h="svelte-1p3evk3">Use as a composable</h3> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent"><div class="center">${validate_component(ComposableModal, "ComposableModal").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })} <div class="component-api"><h2 data-svelte-h="svelte-td9ajj">Component API</h2> <h3 data-svelte-h="svelte-t2khth">Modal</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: api }, {}, {})} <h3 data-svelte-h="svelte-1c31i83">Modal Button</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: buttonApi }, {}, {})}</div>`;
});
export {
  Page as default
};
