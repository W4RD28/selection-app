import { c as create_ssr_component, t as createEventDispatcher, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { F as Fileupload } from "../../../chunks/Fileupload.js";
import { I as Input } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import { A } from "../../../chunks/A.js";
import { H as Heading } from "../../../chunks/Heading.js";
import "../../../chunks/supabaseClient.js";
import "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  let confirm_password;
  let first_name;
  let last_name;
  let phone_number;
  let birth_date;
  let nik;
  let kota;
  let kecamatan;
  let kelurahan;
  let files;
  let uploading = false;
  createEventDispatcher();
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1vzs0v6_START -->${$$result.title = `<title>Register</title>`, ""}<!-- HEAD_svelte-1vzs0v6_END -->`, ""}

<form>${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
      default: () => {
        return `Daftar Bootcamp`;
      }
    })}
  <div class="${"grid gap-6 mb-6 md:grid-cols-2"}"><div>${validate_component(Label, "Label").$$render($$result, { for: "first_name", class: "mb-2" }, {}, {
      default: () => {
        return `Nama Pertama`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "first_name",
        required: true,
        value: first_name
      },
      {
        value: ($$value) => {
          first_name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "last_name", class: "mb-2" }, {}, {
      default: () => {
        return `Nama Terakhir`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "last_name",
        required: true,
        value: last_name
      },
      {
        value: ($$value) => {
          last_name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
      default: () => {
        return `Alamat Email`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        required: true,
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "phone_number", class: "mb-2" }, {}, {
      default: () => {
        return `Nomor Telepon`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "tel",
        id: "phone_number",
        pattern: "[0-9]{8,15}",
        required: true,
        value: phone_number
      },
      {
        value: ($$value) => {
          phone_number = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "birth_date", class: "mb-2" }, {}, {
      default: () => {
        return `Tanggal Lahir`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "date",
        id: "birth_date",
        required: true,
        value: birth_date
      },
      {
        value: ($$value) => {
          birth_date = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "nik", class: "mb-2" }, {}, {
      default: () => {
        return `Nomor Induk Kependudukan`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "nik",
        pattern: "[0-9]{16}",
        required: true,
        value: nik
      },
      {
        value: ($$value) => {
          nik = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "kota", class: "mb-2" }, {}, {
      default: () => {
        return `Kota/Kabupaten KTP`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "kota",
        required: true,
        value: kota
      },
      {
        value: ($$value) => {
          kota = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "kecamatan", class: "mb-2" }, {}, {
      default: () => {
        return `Kecamatan`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "kecamatan",
        required: true,
        value: kecamatan
      },
      {
        value: ($$value) => {
          kecamatan = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "kelurahan", class: "mb-2" }, {}, {
      default: () => {
        return `Kelurahan/Desa`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "kelurahan",
        required: true,
        value: kelurahan
      },
      {
        value: ($$value) => {
          kelurahan = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "course", class: "mb-2" }, {}, {
      default: () => {
        return `Pilih Bootcamp`;
      }
    })}
    <select id="${"course"}" required><option value="${"frontend"}">Frontend</option><option value="${"backend"}">Backend</option><option value="${"mobile"}">Mobile</option></select></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { class: "pb-2" }, {}, {
      default: () => {
        return `Pas Foto (SVG, PNG, JPG atau GIF)`;
      }
    })}
    <div class="${"grid gap-2 mb-6 md:grid-cols-2 w-4/5"}">${validate_component(Fileupload, "Fileupload").$$render(
      $$result,
      {
        class: "mb-2",
        disabled: uploading,
        files
      },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )}
      ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        class: "w-1/4 h-4/5",
        disabled: uploading
      },
      {},
      {
        default: () => {
          return `Upload`;
        }
      }
    )}</div></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "ktp", class: "pb-2" }, {}, {
      default: () => {
        return `Kartu Tanda Penduduk (SVG, PNG, JPG atau GIF)`;
      }
    })}
    <div class="${"grid gap-2 mb-6 md:grid-cols-2 w-4/5"}">${validate_component(Fileupload, "Fileupload").$$render(
      $$result,
      {
        id: "ktp",
        class: "mb-2",
        disable: uploading,
        files
      },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )}
      ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        class: "w-1/4 h-4/5",
        disabled: uploading
      },
      {},
      {
        default: () => {
          return `Upload`;
        }
      }
    )}</div></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "ijazah", class: "pb-2" }, {}, {
      default: () => {
        return `Ijazah SMA/SMK/Diploma/Sarjana atau sederajat (PDF)`;
      }
    })}
    <div class="${"grid gap-2 mb-6 md:grid-cols-2 w-4/5"}">${validate_component(Fileupload, "Fileupload").$$render(
      $$result,
      {
        id: "ijazah",
        class: "mb-2",
        disable: uploading,
        files
      },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        class: "w-1/4 h-4/5",
        disabled: uploading
      },
      {},
      {
        default: () => {
          return `Upload`;
        }
      }
    )}</div></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "cv", class: "pb-2" }, {}, {
      default: () => {
        return `CV (PDF)`;
      }
    })}
    <div class="${"grid gap-2 mb-6 md:grid-cols-2 w-4/5"}">${validate_component(Fileupload, "Fileupload").$$render(
      $$result,
      {
        id: "cv",
        class: "mb-2",
        disable: uploading,
        files
      },
      {
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    ${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        class: "w-1/4 h-4/5",
        disabled: uploading
      },
      {},
      {
        default: () => {
          return `Upload`;
        }
      }
    )}</div></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
      default: () => {
        return `Password`;
      }
    })}
    ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "w-1/2",
        type: "password",
        id: "password",
        required: true,
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "confirm_password", class: "mb-2" }, {}, {
      default: () => {
        return `Konfirmasi Password`;
      }
    })}
    ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "w-1/2",
        type: "password",
        id: "confirm_password",
        required: true,
        value: confirm_password
      },
      {
        value: ($$value) => {
          confirm_password = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
  ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "mb-6 space-x-1", required: true }, {}, {
      default: () => {
        return `Semua data yang saya isikan dan tercantum dalam biodata ini adalah benar dan dapat dipertanggungjawabkan secara hukum.
    `;
      }
    })}
  ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "dark" }, {}, {
      default: () => {
        return `Register`;
      }
    })}
  <div class="${"mb-6 pt-5"}">${validate_component(A, "A").$$render($$result, { href: "/login" }, {}, {
      default: () => {
        return `Sudah miliki akun? `;
      }
    })}</div></form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
