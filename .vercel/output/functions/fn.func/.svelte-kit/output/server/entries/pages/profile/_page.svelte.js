import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, t as createEventDispatcher, v as validate_component, p as is_promise, n as noop } from "../../../chunks/index2.js";
import classNames from "classnames";
import { A as Avatar } from "../../../chunks/Avatar.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { L as Label } from "../../../chunks/Label.js";
import { F as Fileupload } from "../../../chunks/Fileupload.js";
import { I as Input } from "../../../chunks/Input.js";
import { H as Heading } from "../../../chunks/Heading.js";
import "../../../chunks/supabaseClient.js";
import { g as getUserImageUrl, b as getUserKtp, c as getUserCv, d as getUserIjazah } from "../../../chunks/helper.js";
const Helper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["helperClass", "color"]);
  let { helperClass = "text-xs font-normal text-gray-500 dark:text-gray-300" } = $$props;
  let { color = "gray" } = $$props;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.helperClass === void 0 && $$bindings.helperClass && helperClass !== void 0)
    $$bindings.helperClass(helperClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<p${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(helperClass, colorClasses[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let session;
  let user;
  let userData;
  let { data } = $$props;
  let files;
  let uploading = false;
  createEventDispatcher();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ session, user, userData } = data);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1emelur_START -->${$$result.title = `<title>Profil</title>`, ""}<!-- HEAD_svelte-1emelur_END -->`, ""}

<form>${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
      default: () => {
        return `Profil Anda`;
      }
    })}
  <div class="${"mb-6"}">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
      ${validate_component(Avatar, "Avatar").$$render($$result, { alt: "user image", size: "xl" }, {}, {})}
    `;
      }
      return function(avatarUrl) {
        return ` 
      ${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            alt: "user image",
            src: avatarUrl,
            size: "xl"
          },
          {},
          {}
        )}
    `;
      }(__value);
    }(getUserImageUrl(userData.avatar_url))}</div>
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
        value: userData.first_name
      },
      {
        value: ($$value) => {
          userData.first_name = $$value;
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
        value: userData.last_name
      },
      {
        value: ($$value) => {
          userData.last_name = $$value;
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
        value: user.email
      },
      {
        value: ($$value) => {
          user.email = $$value;
          $$settled = false;
        }
      },
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
        pattern: "[0-9]{8,15}",
        required: true,
        value: userData.phone_number
      },
      {
        value: ($$value) => {
          userData.phone_number = $$value;
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
        value: userData.birth_date
      },
      {
        value: ($$value) => {
          userData.birth_date = $$value;
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
        value: userData.nik
      },
      {
        value: ($$value) => {
          userData.nik = $$value;
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
        value: userData.kota
      },
      {
        value: ($$value) => {
          userData.kota = $$value;
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
        value: userData.kecamatan
      },
      {
        value: ($$value) => {
          userData.kecamatan = $$value;
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
        value: userData.kelurahan
      },
      {
        value: ($$value) => {
          userData.kelurahan = $$value;
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
  
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "ktp", class: "pb-2" }, {}, {
      default: () => {
        return `Kartu Tanda Penduduk`;
      }
    })}
    ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
      ${validate_component(Fileupload, "Fileupload").$$render($$result, { id: "ktp", class: "mb-2" }, {}, {})}
    `;
      }
      return function(ktpUrl) {
        return ` 
      ${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "mb-3 w-32",
            type: "button",
            color: "light"
          },
          {},
          {
            default: () => {
              return `Lihat`;
            }
          }
        )}
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
            color: "dark",
            class: "w-1/4 h-4/5",
            disabled: uploading
          },
          {},
          {
            default: () => {
              return `Upload`;
            }
          }
        )}</div>
    `;
      }();
    }(getUserKtp(userData.ktp_url))}
    ${validate_component(Helper, "Helper").$$render($$result, {}, {}, {
      default: () => {
        return `SVG, PNG, JPG atau GIF.`;
      }
    })}</div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "cv", class: "pb-2" }, {}, {
      default: () => {
        return `Curriculum Vitae`;
      }
    })}
    ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
      ${validate_component(Fileupload, "Fileupload").$$render($$result, { id: "cv", class: "mb-2" }, {}, {})}
    `;
      }
      return function(cvUrl) {
        return ` 
      ${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "mb-3 w-32",
            type: "button",
            color: "light"
          },
          {},
          {
            default: () => {
              return `Lihat`;
            }
          }
        )}
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
            color: "dark",
            class: "w-1/4 h-4/5",
            disabled: uploading
          },
          {},
          {
            default: () => {
              return `Upload`;
            }
          }
        )}</div>
    `;
      }();
    }(getUserCv(userData.cv_url))}</div>
  <div class="${"mb-6"}">${validate_component(Label, "Label").$$render($$result, { for: "ijazah", class: "pb-2" }, {}, {
      default: () => {
        return `Ijazah`;
      }
    })}
    ${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
      ${validate_component(Fileupload, "Fileupload").$$render($$result, { id: "ijazah", class: "mb-2" }, {}, {})}
    `;
      }
      return function(ijazahUrl) {
        return `
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            class: "mb-3 w-32",
            type: "button",
            color: "light"
          },
          {},
          {
            default: () => {
              return `Lihat`;
            }
          }
        )}
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
            color: "dark",
            class: "w-1/4 h-4/5",
            disabled: uploading
          },
          {},
          {
            default: () => {
              return `Upload`;
            }
          }
        )}</div>
    `;
      }();
    }(getUserIjazah(userData.ijazah_url))}</div>
  <div class="${"mb-6"}">${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "primary" }, {}, {
      default: () => {
        return `Simpan`;
      }
    })}
    ${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "return",
        color: "light",
        href: "/"
      },
      {},
      {
        default: () => {
          return `Kembali`;
        }
      }
    )}</div></form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
