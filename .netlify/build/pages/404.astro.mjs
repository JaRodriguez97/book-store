/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bf1agSrY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_B60tLWDQ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros de Programaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl m-auto min-h-screen grid place-content-center text-center"> <h1 class="text-4xl from-black mb-4">Oh, vaya. ¡Lo has roto!</h1> <img src="https://midu.dev/images/this-is-fine-404.gif" alt="404"> </main> ` })}`;
}, "C:/Users/nefro/Pictures/projects/book-store/src/pages/404.astro", void 0);

const $$file = "C:/Users/nefro/Pictures/projects/book-store/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
