import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
/* empty css                                                          */import { A } from "../../../../chunks/A.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { P } from "../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1y9qh5y_START -->${$$result.title = `<title>Selesai Ujian</title>`, ""}<!-- HEAD_svelte-1y9qh5y_END -->`, ""}

<div>${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-6" }, {}, {
    default: () => {
      return `Selamat!`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `Anda telah menyelesaikan ujian ini`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `Hasil ujian akan diberitahukan di halaman ${validate_component(A, "A").$$render($$result, { href: "/exam/result" }, {}, {
        default: () => {
          return `hasil ujian`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
