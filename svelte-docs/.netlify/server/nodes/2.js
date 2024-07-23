

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7FjE0-xN.js","_app/immutable/chunks/scheduler.CYKcrEwl.js","_app/immutable/chunks/index.CrVH0I0K.js"];
export const stylesheets = [];
export const fonts = [];
