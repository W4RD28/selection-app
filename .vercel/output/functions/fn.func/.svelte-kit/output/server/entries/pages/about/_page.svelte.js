import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading.js";
import { I as Img } from "../../../chunks/Img.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-kyr8vy_START -->${$$result.title = `<title>Tentang</title>`, ""}<!-- HEAD_svelte-kyr8vy_END -->`, ""}


<div class="${"flex flex-col md:flex-row md:items-center md:justify-between mt-10 mb-10"}"><div class="${"flex flex-col md:w-1/2 pr-5"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      class: "text-4xl font-bold leading-tight text-gray-900 text-center"
    },
    {},
    {
      default: () => {
        return `Tentang Digmar`;
      }
    }
  )}
    
    ${validate_component(P, "P").$$render($$result, { class: "mt-4 text-gray-600 text-center" }, {}, {
    default: () => {
      return `Digmar adalah program pelatihan yang bertujuan untuk meningkatkan keahlian Anda dalam bidang digital marketing.`;
    }
  })}</div>
  <div class="${"flex flex-col mt-4 md:mt-0 md:w-1/2 md:justify-end md:flex-row md:items-center"}">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80",
      alt: "course",
      class: "w-full h-1/2 object-cover rounded-lg"
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
