import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */import { P } from "../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1740c00_START -->${$$result.title = `<title>Penyelesaian kuesioner</title>`, ""}<!-- HEAD_svelte-1740c00_END -->`, ""}

${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Terima kasih telah mengisi kuesioner ini. Jawaban Anda akan kami jadikan pertimbangan dalam proses seleksi.
`;
    }
  })}

${validate_component(Button, "Button").$$render($$result, { color: "dark", href: "/" }, {}, {
    default: () => {
      return `Kembali ke halaman utama`;
    }
  })}`;
});
export {
  Page as default
};
