import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
/* empty css                                                          */import { H as Heading } from "../../../../chunks/Heading.js";
import { P } from "../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-6" }, {}, {
    default: () => {
      return `Selamat!`;
    }
  })}
${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `Anda telah menyelesaikan ujian ini`;
    }
  })}`;
});
export {
  Page as default
};
