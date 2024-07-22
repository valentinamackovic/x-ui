import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hovering;
  return ` <div>${slots.default ? slots.default({ hovering }) : ``}</div>`;
});
const css$1 = {
  code: ".sidebar-button.svelte-1tnf1vu{background-color:transparent;color:white;box-shadow:none;border:none;width:100%;text-align:start}.sidebar-button.svelte-1tnf1vu:hover{background-color:#334155}.sidebar-item-active.svelte-1tnf1vu{background-color:#475569}.sidebar-button.svelte-1tnf1vu,a.svelte-1tnf1vu{display:block;text-decoration:none;font-size:inherit}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="sidebar"><div class="sidebar-content">${validate_component(SidebarItem, "SidebarItem").$$render($$result, {}, {}, {
    default: ({ hovering: active }) => {
      return `<a class="${[
        "sidebar-item sidebar-button svelte-1tnf1vu",
        "sidebar-item-active"
      ].join(" ").trim()}" href="/overview" data-svelte-h="svelte-1iaoh77">Overview</a>`;
    }
  })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, {}, {}, {
    default: ({ hovering: active }) => {
      return `<a class="${[
        "sidebar-item sidebar-button svelte-1tnf1vu",
        ""
      ].join(" ").trim()}" href="/menu" data-svelte-h="svelte-17dochf">Menu</a>`;
    }
  })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, {}, {}, {
    default: ({ hovering: active }) => {
      return `<a class="${[
        "sidebar-item sidebar-button svelte-1tnf1vu",
        ""
      ].join(" ").trim()}" href="/select" data-svelte-h="svelte-1cannak">Select</a>`;
    }
  })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, {}, {}, {
    default: ({ hovering: active }) => {
      return `<a class="${[
        "sidebar-item sidebar-button svelte-1tnf1vu",
        ""
      ].join(" ").trim()}" href="/accordion" data-svelte-h="svelte-ldf4f4">Accordion</a>`;
    }
  })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, {}, {}, {
    default: ({ hovering: active }) => {
      return `<a class="${[
        "sidebar-item sidebar-button svelte-1tnf1vu",
        ""
      ].join(" ").trim()}" href="/modal" data-svelte-h="svelte-bgso9v">Modal</a>`;
    }
  })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, {}, {}, {
    default: ({ hovering: active }) => {
      return `<a class="${[
        "sidebar-item sidebar-button svelte-1tnf1vu",
        ""
      ].join(" ").trim()}" href="/multiselect" data-svelte-h="svelte-17zmsdv">Multiselect</a>`;
    }
  })}</div> </div>`;
});
const css = {
  code: ".title.svelte-1lb2d7q a.svelte-1lb2d7q{position:absolute;left:14px;color:inherit;font-size:30px}.main-page-content.svelte-1lb2d7q.svelte-1lb2d7q{padding:20px 14px;width:100%;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const arrowIcon = icon(faArrowLeft).html;
  $$result.css.add(css);
  return `<title class="title svelte-1lb2d7q"><a href="http://localhost:3000" class="svelte-1lb2d7q"><!-- HTML_TAG_START -->${arrowIcon}<!-- HTML_TAG_END --> </a> <div data-svelte-h="svelte-co5qnq">X UI</div></title> <div class="main-page-wrapper">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="main-page-content svelte-1lb2d7q">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
