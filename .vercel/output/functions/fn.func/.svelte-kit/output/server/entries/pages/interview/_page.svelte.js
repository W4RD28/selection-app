import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { A } from "../../../chunks/A.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { L as List, a as Li } from "../../../chunks/List.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-tqk1pm_START -->${$$result.title = `<title>Wawancara</title>`, ""}<!-- HEAD_svelte-tqk1pm_END -->`, ""}

<div>${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-6" }, {}, {
    default: () => {
      return `Wawancara`;
    }
  })}
  <div class="${"mb-6"}">${validate_component(P, "P").$$render($$result, { class: "mb-2" }, {}, {
    default: () => {
      return `Wawancara memiliki ketentuan berikut:`;
    }
  })}
    ${validate_component(List, "List").$$render($$result, { tag: "ul", class: "space-y-1 text-black" }, {}, {
    default: () => {
      return `${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Peserta yang dapat ikut hanyalah yang sudah lulus seleksi ujian`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Wawancara dilaksanakan secara daring`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Peserta masuk ke ruangan Zoom yang telah disediakan panitia`;
        }
      })}
      ${validate_component(Li, "Li").$$render($$result, {}, {}, {
        default: () => {
          return `Hasil wawancara akan menentukan kelulusan seleksi`;
        }
      })}`;
    }
  })}</div>

  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-3" }, {}, {
    default: () => {
      return `Wawancara Anda akan dilaksanakan pada tanggal berikut`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-3" }, {}, {
    default: () => {
      return `Tanggal: 22 April 2023`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-3" }, {}, {
    default: () => {
      return `Jam: 10:00 - 11:00 WIB`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-3" }, {}, {
    default: () => {
      return `Link Zoom: ${validate_component(A, "A").$$render($$result, { href: "https://zoom.us/123456789" }, {}, {
        default: () => {
          return `https://zoom.us/123456789`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
