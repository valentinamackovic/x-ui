

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/multiselect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DpS4TYRm.js","_app/immutable/chunks/scheduler.CYKcrEwl.js","_app/immutable/chunks/index.CrVH0I0K.js","_app/immutable/chunks/ComponentApiTable.D-CvUVM2.js"];
export const stylesheets = ["_app/immutable/assets/ComponentApiTable.CxCLBsHh.css"];
export const fonts = [];
