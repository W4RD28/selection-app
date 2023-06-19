import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading.js";
import { L as List, a as Li } from "../../../chunks/List.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-15lzc55_START -->${$$result.title = `<title>Tes</title>`, ""}<!-- HEAD_svelte-15lzc55_END -->`, ""}

<div class="${"justify-center"}">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-6" }, {}, {
    default: () => {
      return `Halaman Tes Tertulis`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6 text-red-700" }, {}, {
    default: () => {
      return `Status: Anda belum melakukan tes ini`;
    }
  })}
  <div class="${"mb-6"}">${validate_component(P, "P").$$render($$result, { class: "mb-2" }, {}, {
    default: () => {
      return `Tes memiliki ketentuan berikut:`;
    }
  })}
    ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1 text-black" }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Peserta yang dapat ikut hanyalah yang sudah lulus seleksi administrasi`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `tes hanya dapat dilakukan maksimal 1 (satu) kali`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Soal berformat pilihan ganda`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Hasil tes digunakan untuk penentuan seleksi wawancara`;
        }
      })}`;
    }
  })}</div>
  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/exam/questions/1",
      class: "mt-6 mb-6",
      color: "light"
    },
    {},
    {
      default: () => {
        return `Laksanakan Tes`;
      }
    }
  )}
  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/exam/result",
      class: "mt-6 mb-6",
      color: "light"
    },
    {},
    {
      default: () => {
        return `Lihat Hasil Tes`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
