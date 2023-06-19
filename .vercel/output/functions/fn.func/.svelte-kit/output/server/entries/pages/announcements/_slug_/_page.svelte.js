import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
/* empty css                                                          */import { A } from "../../../../chunks/A.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { P } from "../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-3uem7z_START -->
  Pengumuman
<!-- HEAD_svelte-3uem7z_END -->`, ""}

<div>${validate_component(A, "A").$$render($$result, { href: "/dashboard", class: "mb-10" }, {}, {
    default: () => {
      return `Kembali ke Dashboard`;
    }
  })}</div>

<div class="${"mb-10"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "text-2xl text-center font-semibold mb-3"
    },
    {},
    {
      default: () => {
        return `Pengumuman`;
      }
    }
  )}
  ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      class: "text-left font-semibold text-sm mb-10"
    },
    {},
    {
      default: () => {
        return `14/3/2023`;
      }
    }
  )}
  ${validate_component(P, "P").$$render($$result, { class: "text-justify" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat luctus tortor, a pharetra dui venenatis eleifend. Vivamus vitae diam feugiat, dapibus lectus in, consectetur lacus. Morbi bibendum nibh ligula, in ultricies ante faucibus nec. Phasellus sagittis lacus lectus, sit amet molestie dui vestibulum sit amet. Ut et sapien dui. Praesent semper ex leo, ac dapibus erat maximus non. Aenean blandit odio tincidunt tortor aliquet, id molestie leo fringilla. Nulla pellentesque interdum arcu,`;
    }
  })}</div>

<div class="${"items-left"}">${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Tim Digmar`;
    }
  })}</div>`;
});
export {
  Page as default
};
