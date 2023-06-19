import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading.js";
import { L as List, a as Li } from "../../../chunks/List.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-vzxm6t_START -->${$$result.title = `<title>Tes administrasi</title>`, ""}<!-- HEAD_svelte-vzxm6t_END -->`, ""}

<div class="${"justify-center"}">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-6" }, {}, {
    default: () => {
      return `Halaman Tes Administrasi`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6 text-red-700" }, {}, {
    default: () => {
      return `Status: Anda belum menjawab tes administrasi`;
    }
  })}
  <div class="${"mb-6"}">${validate_component(P, "P").$$render($$result, { class: "mb-2" }, {}, {
    default: () => {
      return `Tes administrasi memiliki ketentuan berikut:`;
    }
  })}
    ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1 text-black" }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Sebagai syarat mengerjakan ujian`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Peserta harus menjawab tes administrasi sejujur mungkin`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Tes administrasi hanya bisa diambil sekali`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Hasil tes administrasi dijadikan pertimbangan kelayakan peserta`;
        }
      })}`;
    }
  })}</div>
  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/questionnaire/questions",
      class: "mt-6 mb-6",
      color: "light"
    },
    {},
    {
      default: () => {
        return `Jawab Tes administrasi`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
