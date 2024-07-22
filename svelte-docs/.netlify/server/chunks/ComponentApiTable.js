import { c as create_ssr_component, h as each, e as escape } from "./ssr.js";
import "prismjs";
import "prismjs/components/prism-javascript.js";
const css = {
  code: ".example-box-buttons.svelte-1o35lc9{margin-bottom:10px}",
  map: null
};
const Example = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { codeContent } = $$props;
  if ($$props.codeContent === void 0 && $$bindings.codeContent && codeContent !== void 0)
    $$bindings.codeContent(codeContent);
  $$result.css.add(css);
  return `<div class="example-box"><div class="example-box-buttons svelte-1o35lc9" style="margin-bottom: 10px;"><button class="btn-switch" data-svelte-h="svelte-pf4q7v">Example</button> <button class="btn-switch" data-svelte-h="svelte-1151tsb">Code</button></div> <div style="display: flex; flex-direction: column;">${`${slots.exampleContent ? slots.exampleContent({}) : ``}`}</div> </div>`;
});
const ComponentApiTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { values = [] } = $$props;
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  return `<div class="table-component"><table><thead data-svelte-h="svelte-axwt4n"><tr><th>Prop</th> <th>Description</th> <th>Type</th> <th>Default</th></tr></thead> <tbody>${each(values, (value) => {
    return `<tr><td class="prop">${escape(value.prop)}</td> <td class="description">${escape(value.description)}</td> <td><code>${escape(value.type)}</code></td> <td><code>${escape(value.default)}</code></td> </tr>`;
  })}</tbody></table></div>`;
});
export {
  ComponentApiTable as C,
  Example as E
};
