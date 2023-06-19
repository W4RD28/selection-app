import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { L as Label } from "../../../chunks/Label.js";
import { I as Input } from "../../../chunks/Input.js";
import { H as Heading } from "../../../chunks/Heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1qck1yw_START -->${$$result.title = `<title>Akun</title>`, ""}<!-- HEAD_svelte-1qck1yw_END -->`, ""}

<form>${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Akun Anda`;
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
      disabled: true,
      value: "Windu"
    },
    {},
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
      disabled: true,
      value: "Nursetyadi"
    },
    {},
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
      disabled: true,
      value: "nursetyadiwindu@gmail.com"
    },
    {},
    {}
  )}</div>
    <div>${validate_component(Label, "Label").$$render($$result, { for: "phone", class: "mb-2" }, {}, {
    default: () => {
      return `Nomor Telepon`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "tel",
      id: "phone",
      pattern: "[0-9]" + 15,
      disabled: true,
      value: "08323121344"
    },
    {},
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
      disabled: true,
      value: "28/10/2001"
    },
    {},
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
      pattern: "[0-9]" + 16,
      disabled: true,
      value: "69121212"
    },
    {},
    {}
  )}</div></div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "alamat", class: "mb-2" }, {}, {
    default: () => {
      return `Alamat`;
    }
  })}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "alamat",
      disabled: true,
      value: "323121213"
    },
    {},
    {}
  )}</div>
  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/account/change-password",
      color: "light"
    },
    {},
    {
      default: () => {
        return `Ganti password`;
      }
    }
  )}
  ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "dark" }, {}, {
    default: () => {
      return `Simpan`;
    }
  })}</form>`;
});
export {
  Page as default
};
