import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
import "../../../chunks/index.js";
import "classnames";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
/* empty css                                                       */import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { I as Input } from "../../../chunks/Input.js";
import { L as Label } from "../../../chunks/Label.js";
import { A } from "../../../chunks/A.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { I as Img } from "../../../chunks/Img.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-10qpq3o_START -->${$$result.title = `<title>Login</title>`, ""}<!-- HEAD_svelte-10qpq3o_END -->`, ""}


<div class="${""}">${validate_component(Card, "Card").$$render($$result, { size: "sm" }, {}, {
      default: () => {
        return `${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "text-xl font-medium" }, {}, {
          default: () => {
            return `Login`;
          }
        })}
    <form class="${"p-10"}"><div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
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
      <div class="${"mb-6"}">${validate_component(Checkbox, "Checkbox").$$render($$result, { id: "remember" }, {}, {
          default: () => {
            return `Ingat saya`;
          }
        })}</div>
      ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "primary" }, {}, {
          default: () => {
            return `Login`;
          }
        })}
      <div class="${"pt-5"}">${validate_component(A, "A").$$render($$result, { href: "/register" }, {}, {
          default: () => {
            return `Belum miliki akun? `;
          }
        })}</div></form>`;
      }
    })}
  ${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: "low-code-development-concept-illustration_114360-7294.avif",
        alt: "course",
        class: "w-full h-32 object-cover rounded-t-lg"
      },
      {},
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
