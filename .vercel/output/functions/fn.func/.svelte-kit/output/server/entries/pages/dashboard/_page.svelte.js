import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { A } from "../../../chunks/A.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { I as Img } from "../../../chunks/Img.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-t9xcep_START -->${$$result.title = `<title>Dashboard</title>`, ""}<!-- HEAD_svelte-t9xcep_END -->`, ""}


${data.session ? `
<div class="${"flex flex-col md:w-1/2"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      class: "text-4xl font-bold leading-tight text-gray-900"
    },
    {},
    {
      default: () => {
        return `Pengumuman`;
      }
    }
  )}</div>
<div class="${"flex flex-col mt-6 md:flex-row md:items-center md:justify-between"}"><div class="${"flex flex-col w-full md:w-1/3"}">${validate_component(A, "A").$$render($$result, { href: "/announcements/1" }, {}, {
    default: () => {
      return `<div class="${"flex flex-col items-center justify-center w-full h-30 p-10"}">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "text-xl text-left font-bold"
        },
        {},
        {
          default: () => {
            return `Pengumuman 1`;
          }
        }
      )}
      ${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h5",
          class: "text-left",
          style: "font-size: 12px"
        },
        {},
        {
          default: () => {
            return `12/3/2023`;
          }
        }
      )}</div>`;
    }
  })}</div>
  <div class="${"flex flex-col w-full md:w-1/3"}"><div class="${"flex flex-col items-center justify-center w-full h-30 p-10"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-left font-bold"
    },
    {},
    {
      default: () => {
        return `Pengumuman 2`;
      }
    }
  )}
      ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h5",
      class: "text-left",
      style: "font-size: 12px"
    },
    {},
    {
      default: () => {
        return `14/3/2023`;
      }
    }
  )}</div></div>
  <div class="${"flex flex-col w-full md:w-1/3"}"><div class="${"flex flex-col items-center justify-center w-full h-30 p-10"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-left font-bold"
    },
    {},
    {
      default: () => {
        return `Pengumuman 3`;
      }
    }
  )}
      ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h5",
      class: "text-left",
      style: "font-size: 12px"
    },
    {},
    {
      default: () => {
        return `15/3/2023`;
      }
    }
  )}</div></div></div>
${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mt-1 text-gray-600 text-left pl-10 mb-10"
    },
    {},
    {
      default: () => {
        return `Lihat semua pengumuman ${validate_component(A, "A").$$render($$result, { href: "/announcements" }, {}, {
          default: () => {
            return `disini`;
          }
        })}`;
      }
    }
  )}` : `${!data.session ? `
<div class="${"flex flex-col md:flex-row md:items-center md:justify-between mb-16"}"><div class="${"flex flex-col md:w-1/2"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      class: "text-4xl font-bold leading-tight text-gray-900 text-center"
    },
    {},
    {
      default: () => {
        return `Tingkatkan Keahlian Anda`;
      }
    }
  )}
    
    ${validate_component(P, "P").$$render($$result, { class: "mt-4 text-gray-600 text-center" }, {}, {
    default: () => {
      return `Digmar adalah program pelatihan yang bertujuan untuk meningkatkan keahlian Anda dalam bidang digital marketing.`;
    }
  })}
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "primary",
      class: "w-1/2 mt-8 self-center",
      href: "/register"
    },
    {},
    {
      default: () => {
        return `Daftar Sekarang`;
      }
    }
  )}</div>
  <div class="${"flex flex-col mt-4 md:mt-0 md:w-1/2 md:justify-end md:flex-row md:items-center"}">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      alt: "course",
      class: "w-11/12 h-1/2 object-cover rounded-lg"
    },
    {},
    {}
  )}</div></div>` : ``}`}


<div class="${"flex flex-col md:w-1/2"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      class: "text-4xl font-bold leading-tight text-gray-900"
    },
    {},
    {
      default: () => {
        return `Kelas Kami`;
      }
    }
  )}</div>
<div class="${"flex flex-col mt-8 md:flex-row md:items-center md:justify-between mb-16"}"><div class="${"flex flex-col w-full md:w-1/3"}"><div class="${"flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg"}">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      alt: "course",
      class: "w-full h-full object-cover rounded-lg mb-3"
    },
    {},
    {}
  )}
      <div class="${"flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-center font-bold"
    },
    {},
    {
      default: () => {
        return `Karyawan`;
      }
    }
  )}
        ${validate_component(P, "P").$$render($$result, { class: "mt-2 text-gray-600" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget elementum commodo, sem nisl aliquet ex, quis aliquam nisl nunc vel nunc.`;
    }
  })}</div></div></div>
  <div class="${"flex flex-col w-full mt-8 md:w-1/3 md:mt-0 md:ml-4"}"><div class="${"flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg"}">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      alt: "course",
      class: "w-full h-full object-cover rounded-lg mb-3"
    },
    {},
    {}
  )}
      <div class="${"flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-center font-bold"
    },
    {},
    {
      default: () => {
        return `Pebisnis`;
      }
    }
  )}
        ${validate_component(P, "P").$$render($$result, { class: "mt-2 text-gray-600" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget elementum commodo, sem nisl aliquet ex, quis aliquam nisl nunc vel nunc.`;
    }
  })}</div></div></div>
  <div class="${"flex flex-col w-full mt-8 md:w-1/3 md:mt-0 md:ml-4"}"><div class="${"flex flex-col items-center justify-center w-full h-80 bg-gray-100 rounded-lg"}">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      alt: "course",
      class: "w-full h-full object-cover rounded-lg mb-3"
    },
    {},
    {}
  )}
      <div class="${"flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-center font-bold"
    },
    {},
    {
      default: () => {
        return `Profesional`;
      }
    }
  )}
        ${validate_component(P, "P").$$render($$result, { class: "mt-2 text-gray-600" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget elementum commodo, sem nisl aliquet ex, quis aliquam nisl nunc vel nunc.`;
    }
  })}</div></div></div></div>

<div class="${"flex flex-col md:w-1/2"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      class: "text-4xl font-bold leading-tight text-gray-900"
    },
    {},
    {
      default: () => {
        return `Alur Pendaftaran`;
      }
    }
  )}</div>

${!data.session ? `<div class="${"flex flex-col md:w-1/2"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      class: "text-4xl font-bold leading-tight text-gray-900"
    },
    {},
    {
      default: () => {
        return `Pengumuman`;
      }
    }
  )}</div>
<div class="${"flex flex-col mt-6 md:flex-row md:items-center md:justify-between"}"><div class="${"flex flex-col w-full md:w-1/3"}">${validate_component(A, "A").$$render($$result, { href: "/announcements/1" }, {}, {
    default: () => {
      return `<div class="${"flex flex-col items-center justify-center w-full h-30 p-10"}">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h3",
          class: "text-xl text-left font-bold"
        },
        {},
        {
          default: () => {
            return `Pengumuman 1`;
          }
        }
      )}
      ${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h5",
          class: "text-left",
          style: "font-size: 12px"
        },
        {},
        {
          default: () => {
            return `12/3/2023`;
          }
        }
      )}</div>`;
    }
  })}</div>
  <div class="${"flex flex-col w-full md:w-1/3"}"><div class="${"flex flex-col items-center justify-center w-full h-30 p-10"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-left font-bold"
    },
    {},
    {
      default: () => {
        return `Pengumuman 2`;
      }
    }
  )}
      ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h5",
      class: "text-left",
      style: "font-size: 12px"
    },
    {},
    {
      default: () => {
        return `14/3/2023`;
      }
    }
  )}</div></div>
  <div class="${"flex flex-col w-full md:w-1/3"}"><div class="${"flex flex-col items-center justify-center w-full h-30 p-10"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      class: "text-xl text-left font-bold"
    },
    {},
    {
      default: () => {
        return `Pengumuman 3`;
      }
    }
  )}
      ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h5",
      class: "text-left",
      style: "font-size: 12px"
    },
    {},
    {
      default: () => {
        return `15/3/2023`;
      }
    }
  )}</div></div></div>
${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mt-1 text-gray-600 text-left pl-10 mb-10"
    },
    {},
    {
      default: () => {
        return `Lihat semua pengumuman ${validate_component(A, "A").$$render($$result, { href: "/announcements" }, {}, {
          default: () => {
            return `disini`;
          }
        })}`;
      }
    }
  )}` : ``}`;
});
export {
  Page as default
};
