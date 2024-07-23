import { c as create_ssr_component, b as spread, d as escape_object, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { E as Example, C as ComponentApiTable } from "../../../chunks/ComponentApiTable.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandedState;
  let { expanded = false } = $$props;
  let { title = "" } = $$props;
  let { component = false } = $$props;
  let { isStatic = false } = $$props;
  let { onTitleClick = () => {
  } } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.isStatic === void 0 && $$bindings.isStatic && isStatic !== void 0)
    $$bindings.isStatic(isStatic);
  if ($$props.onTitleClick === void 0 && $$bindings.onTitleClick && onTitleClick !== void 0)
    $$bindings.onTitleClick(onTitleClick);
  expandedState = expanded;
  return `<div${spread([{ class: "accordion-wrapper" }, escape_object($$props)], {})}>${component ? `<button class="btn-accordion">${expandedState ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-icon"><path fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-icon"><path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>`} ${escape(title)}</button> ${expandedState ? `<div>${slots.default ? slots.default({}) : ``}</div>` : ``}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const AccordionButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button${spread([{ class: "btn-accordion" }, escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</button>`;
});
const AccordionContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expanded = false } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  return `${expanded ? `<div${spread([escape_object($$props)], {})}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const css = {
  code: ".center.svelte-dswaxe{display:flex;justify-content:center;align-items:center}.column.svelte-dswaxe{flex-direction:column}",
  map: null
};
const ComposableAccordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expanded = false;
  function toggleExpanded() {
    expanded = !expanded;
  }
  $$result.css.add(css);
  return `<div class="center column svelte-dswaxe">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(AccordionButton, "AccordionButton").$$render($$result, { onClick: toggleExpanded }, {}, {
        default: () => {
          return `Basic example`;
        }
      })} ${validate_component(AccordionContent, "AccordionContent").$$render($$result, { expanded }, {}, {
        default: () => {
          return `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem deleniti corporis rerum vel temporibus perspiciatis
            enim earum. Aliquid consequatur ipsa voluptatibus, earum quibusdam
            atque saepe inventore, cupiditate unde, reprehenderit repellat!`;
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
    prop: "expanded",
    description: "Whether accordion is expanded",
    type: "boolean",
    default: "false"
  },
  {
    prop: "title",
    description: "Title of the collapsable section",
    type: "string",
    default: ""
  },
  {
    prop: "onTitleClick",
    description: "Triggers when the title is clicked",
    type: "function",
    default: "() => {}"
  }
];
const buttonApi = [
  {
    prop: "onClick",
    description: "Triggers when the title is clicked",
    type: "function",
    default: "() => {}"
  }
];
const contentApi = [
  {
    prop: "expanded",
    description: "Whether the content is visible",
    type: "boolean",
    default: "false"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expanded = false;
  const onClick = () => {
    expanded = !expanded;
  };
  return `<h1 class="main-page-content-title" data-svelte-h="svelte-4imeuf">Accordion</h1> <p data-svelte-h="svelte-16xgrp8">A content area which can be collapsed and expanded.</p> <h2 data-svelte-h="svelte-1978del">Examples</h2> <h3 data-svelte-h="svelte-1olpnd9">Use as a component</h3> <p data-svelte-h="svelte-4oauk4">Basic example</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Accordion, "Accordion").$$render($$result, { title: "Lorem ipsum", component: true }, {}, {
        default: () => {
          return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.`;
        }
      })}</div>`;
    }
  })} <p data-svelte-h="svelte-oblau7">Initial state set to expanded</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Accordion, "Accordion").$$render(
        $$result,
        {
          title: "Lorem ipsum",
          expanded: true,
          component: true
        },
        {},
        {
          default: () => {
            return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.`;
          }
        }
      )}</div>`;
    }
  })} <p data-svelte-h="svelte-1u64vd5">Example without a title.</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Accordion, "Accordion").$$render($$result, { component: true }, {}, {
        default: () => {
          return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.`;
        }
      })}</div>`;
    }
  })} <p data-svelte-h="svelte-r4atdp">Ignore the internal logic with static property</p> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(Accordion, "Accordion").$$render(
        $$result,
        {
          expanded,
          onTitleClick: onClick,
          title: "Lorem ipsum",
          component: true,
          isStatic: true
        },
        {},
        {
          default: () => {
            return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.`;
          }
        }
      )}</div>`;
    }
  })} <h3 data-svelte-h="svelte-1p3evk3">Use as a composable</h3> ${validate_component(Example, "Example").$$render($$result, { codeContent: "g" }, {}, {
    exampleContent: () => {
      return `<div slot="exampleContent">${validate_component(ComposableAccordion, "ComposableAccordion").$$render($$result, {}, {}, {})}</div>`;
    }
  })} <div class="component-api"><h2 data-svelte-h="svelte-td9ajj">Component API</h2> <h3 data-svelte-h="svelte-ymr1hc">Accordion</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: api }, {}, {})} <h3 data-svelte-h="svelte-5ar5f6">Accordion Button</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: buttonApi }, {}, {})} <h3 data-svelte-h="svelte-1mbcyvv">Accordion Content</h3> ${validate_component(ComponentApiTable, "ComponentApiTable").$$render($$result, { values: contentApi }, {}, {})}</div>`;
});
export {
  Page as default
};
