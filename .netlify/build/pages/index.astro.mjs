/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_Bf1agSrY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_B60tLWDQ.mjs';
import 'clsx';
import { b as books } from '../chunks/books_CjugA9Ua.mjs';
export { renderers } from '../renderers.mjs';

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl md:text-8xl font-black uppercase text-center py-8 px-4" style="view-transition-name: title;">
Libros de
<span class="block text-[36px] md:text-[58px]">programación</span> </h1>`;
}, "C:/Users/nefro/Pictures/projects/book-store/src/components/Title.astro", void 0);

const $$Astro = createAstro();
const $$BookItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookItem;
  const { title, img, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${id}`, "href")} class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"> <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(img, "src")}${addAttribute(`Portada del libro ${title}`, "alt")}${addAttribute(`view-transition-name: book-${id};`, "style")}> </a>`;
}, "C:/Users/nefro/Pictures/projects/book-store/src/components/BookItem.astro", void 0);

const $$BookList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4"> ${books.map(({ id, img, title }) => renderTemplate`<li> ${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "img": img, "title": title })} </li>`)} </ul>`;
}, "C:/Users/nefro/Pictures/projects/book-store/src/components/BookList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros de Programaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto max-w-4xl"> ${renderComponent($$result2, "Title", $$Title, {})} ${renderComponent($$result2, "BookList", $$BookList, {})} </main> ` })}`;
}, "C:/Users/nefro/Pictures/projects/book-store/src/pages/index.astro", void 0);

const $$file = "C:/Users/nefro/Pictures/projects/book-store/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
