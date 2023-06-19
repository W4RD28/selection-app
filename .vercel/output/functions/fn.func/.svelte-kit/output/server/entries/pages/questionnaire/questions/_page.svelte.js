import { c as create_ssr_component, b as compute_rest_props, g as getContext, v as validate_component, j as add_attribute, d as spread, e as escape_object, f as escape_attribute_value, l as compute_slots } from "../../../../chunks/index2.js";
import classNames from "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { L as Label } from "../../../../chunks/Label.js";
import { R as Radio } from "../../../../chunks/Radio.js";
import { W as Wrapper } from "../../../../chunks/Wrapper.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { s as supabase } from "../../../../chunks/supabaseClient.js";
import "../../../../chunks/index.js";
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = "" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => classNames(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = classNames(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? classNames("block w-full", "text-sm", "border-0 px-0", "bg-inherit dark:bg-inherit", "focus:outline-none focus:ring-0") : classNames(wrapperClass, "p-2.5 text-sm", "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500");
  innerWrapperClass = classNames("py-2 px-4 bg-white dark:bg-gray-800", $$slots.footer || "rounded-b-lg", $$slots.header || "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``}
  ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${value || ""}</textarea>`;
        }
      })}
  ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const getUserId = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user === void 0) {
      throw new Error();
    }
    return user?.id;
  };
  getUserId();
  let category;
  let disability;
  let disability_type;
  let pendapatan;
  let alasan;
  let harapan;
  let akses_laptop;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17qxvhx_START -->${$$result.title = `<title>Tes Administrasi</title>`, ""}<!-- HEAD_svelte-17qxvhx_END -->`, ""}

<form>${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
      default: () => {
        return `Pertanyaan Administrasi Bootcamp`;
      }
    })}
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "category" }, {}, {
      default: () => {
        return `Apakah Anda termasuk dalam kategori berikut?`;
      }
    })}
  <div class="${"mb-6"}">${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "category",
        value: "Yatim",
        required: true,
        group: category
      },
      {
        group: ($$value) => {
          category = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Yatim`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "category",
        value: "Yatim piatu",
        required: true,
        group: category
      },
      {
        group: ($$value) => {
          category = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Piatu`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "category",
        value: "Bukan keduanya",
        required: true,
        group: category
      },
      {
        group: ($$value) => {
          category = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Bukan keduanya`;
        }
      }
    )}</div>
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "disability" }, {}, {
      default: () => {
        return `Apakah Anda termasuk penyandang disabilitas?`;
      }
    })}
  <div class="${"mb-6"}">${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "disability",
        value: "Ya",
        required: true,
        group: disability
      },
      {
        group: ($$value) => {
          disability = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Ya`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "disability",
        value: "Tidak",
        required: true,
        group: disability
      },
      {
        group: ($$value) => {
          disability = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Tidak`;
        }
      }
    )}</div>
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "disability_type" }, {}, {
      default: () => {
        return `Jika ya, jenis disabilitas`;
      }
    })}
  ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        class: "mb-6",
        id: "disability_type",
        value: disability_type
      },
      {
        value: ($$value) => {
          disability_type = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "pendapatan" }, {}, {
      default: () => {
        return `Pendapatan per bulan`;
      }
    })}
  <div class="${"mb-6"}">${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "pendapatan",
        value: "Kurang dari 1 juta",
        required: true,
        group: pendapatan
      },
      {
        group: ($$value) => {
          pendapatan = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Kurang dari 1 juta`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "pendapatan",
        value: "1 juta - 2 juta",
        required: true,
        group: pendapatan
      },
      {
        group: ($$value) => {
          pendapatan = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `1 juta - 2 juta`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "pendapatan",
        value: "2 juta - 3 juta",
        required: true,
        group: pendapatan
      },
      {
        group: ($$value) => {
          pendapatan = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `2 juta - 3 juta`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "pendapatan",
        value: "3 juta - 4 juta",
        required: true,
        group: pendapatan
      },
      {
        group: ($$value) => {
          pendapatan = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `3 juta - 4 juta`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "pendapatan",
        value: "4 juta - 5 juta",
        required: true,
        group: pendapatan
      },
      {
        group: ($$value) => {
          pendapatan = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `4 juta - 5 juta`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "pendapatan",
        value: "Lebih dari 5 juta",
        required: true,
        group: pendapatan
      },
      {
        group: ($$value) => {
          pendapatan = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Lebih dari 5 juta`;
        }
      }
    )}</div>
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "alasan" }, {}, {
      default: () => {
        return `Alasan mengikuti bootcamp`;
      }
    })}
  ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        class: "mb-6",
        id: "alasan",
        required: true,
        value: alasan
      },
      {
        value: ($$value) => {
          alasan = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "harapan" }, {}, {
      default: () => {
        return `Harapan setelah mengikuti bootcamp`;
      }
    })}
  ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        class: "mb-6",
        id: "harapan",
        required: true,
        value: harapan
      },
      {
        value: ($$value) => {
          harapan = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  ${validate_component(Label, "Label").$$render($$result, { class: "mb-6", for: "akses laptop" }, {}, {
      default: () => {
        return `Apakah Anda dapat mengakses laptop/komputer selama pelatihan?`;
      }
    })}
  <div class="${"mb-6"}">${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "akses_laptop",
        id: "akses_laptop",
        value: "ya",
        required: true,
        group: akses_laptop
      },
      {
        group: ($$value) => {
          akses_laptop = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Ya`;
        }
      }
    )}
    ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        class: "mb-3",
        name: "akses_laptop",
        id: "akses_laptop",
        value: "tidak",
        required: true,
        group: akses_laptop
      },
      {
        group: ($$value) => {
          akses_laptop = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Tidak`;
        }
      }
    )}</div>
  ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "mb-6 space-x-1", required: true }, {}, {
      default: () => {
        return `Saya dapat mengikuti seluruh kegiatan bootcamp.
    `;
      }
    })}
  ${validate_component(Checkbox, "Checkbox").$$render($$result, { class: "mb-6 space-x-1", required: true }, {}, {
      default: () => {
        return `Saya telah menjawab Tes Administrasi ini dengan jujur.
    `;
      }
    })}
  ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "dark" }, {}, {
      default: () => {
        return `Submit`;
      }
    })}</form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
