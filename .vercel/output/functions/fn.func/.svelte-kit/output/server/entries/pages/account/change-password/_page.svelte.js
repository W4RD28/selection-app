import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */import { L as Label } from "../../../../chunks/Label.js";
import { I as Input } from "../../../../chunks/Input.js";
import { H as Heading } from "../../../../chunks/Heading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-hel1wn_START -->${$$result.title = `<title>Ganti Password</title>`, ""}<!-- HEAD_svelte-hel1wn_END -->`, ""}

<form>${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Ganti Password`;
    }
  })}
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
    default: () => {
      return `Password`;
    }
  })}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "password",
      required: true
    },
    {},
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
      type: "password",
      id: "confirm_password",
      required: true
    },
    {},
    {}
  )}</div>
  ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "dark" }, {}, {
    default: () => {
      return `Ganti Password`;
    }
  })}</form>`;
});
export {
  Page as default
};
