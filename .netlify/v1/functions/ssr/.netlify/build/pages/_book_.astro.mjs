/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Bf1agSrY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_B60tLWDQ.mjs';
import { b as books } from '../chunks/books_CjugA9Ua.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$book = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id === book);
  if (!info) return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Layout ${info.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto max-w-4xl"> <header> <h1 class="scale-50 text-6xl md:text-8xl font-black uppercase text-center py-8 px-4" style="view-transition-name: title;">
Libros de
<span class="block text-[36px] md:text-[58px]">programación</span> </h1> </header> <div class="grid grid-cols-[350px_1fr] gap-x-12 mt-20"> <div class="flex flex-col"> <picture class="mb-8 w-full relative"> <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(`${info.img}`, "src")}${addAttribute(`Portada del libro ${info.title}`, "alt")}${addAttribute(`view-transition-name: book-${info.id};`, "style")}> </picture> <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"> <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"> <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path> </svg>
Comprar ahora
</a> <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
Leer Libro
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> <aside> <h1 class="text-5xl from-black mb-4">${info.title}</h1> <p class="text-lg mb-4">${info.opinion}</p> <p><strong>Autor:</strong> <span>${info.author}</span></p> </aside> </div> </main> ` })}`;
}, "C:/Users/nefro/Pictures/projects/book-store/src/pages/[book].astro", void 0);

const $$file = "C:/Users/nefro/Pictures/projects/book-store/src/pages/[book].astro";
const $$url = "/[book]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$book,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
