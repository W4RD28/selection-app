import { c as create_ssr_component, b as compute_rest_props, a as setContext, d as spread, e as escape_object, f as escape_attribute_value, h as escape, v as validate_component, r as each } from "../../../../../chunks/index2.js";
import classNames from "classnames";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as Card } from "../../../../../chunks/Card.js";
/* empty css                                                             */import { R as Radio } from "../../../../../chunks/Radio.js";
import { I as Img } from "../../../../../chunks/Img.js";
import { P } from "../../../../../chunks/P.js";
import { a as getQuestionImage } from "../../../../../chunks/helper.js";
import "../../../../../chunks/supabaseClient.js";
import "../../../../../chunks/index.js";
const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "divClass"]);
  let { size = "md" } = $$props;
  let { divClass = "inline-flex rounded-lg shadow-sm" } = $$props;
  setContext("group", { size });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      },
      { role: "group" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let examData;
  let questions;
  let questionsCount;
  let answer;
  let userAnswer;
  let timer;
  let { data } = $$props;
  let currentAnswer;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ user, examData, questions, questionsCount, answer, userAnswer, timer } = data);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-p9sg4g_START -->${$$result.title = `<title>Ujian</title>`, ""}<!-- HEAD_svelte-p9sg4g_END -->`, ""}



<div class="${"container grid grid-cols-2"}"><div><div><h1 class="${"mb-6"}">Soal ${escape(examData.id)}</h1>
      ${examData.image ? `${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: getQuestionImage(examData.image),
        alt: "Question Image",
        class: "mb-6"
      },
      {},
      {}
    )}` : ``}
      ${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
      default: () => {
        return `${escape(examData.question)}`;
      }
    })}
      ${userAnswer == "a" ? `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        checked: true,
        value: "a",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_a)}`;
        }
      }
    )}` : `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        value: "a",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_a)}`;
        }
      }
    )}`}
      ${userAnswer == "b" ? `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        checked: true,
        value: "b",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_b)}`;
        }
      }
    )}` : `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        value: "b",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_b)}`;
        }
      }
    )}`}
      ${userAnswer == "c" ? `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        checked: true,
        value: "c",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_c)}`;
        }
      }
    )}` : `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        value: "c",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_c)}`;
        }
      }
    )}`}
      ${userAnswer == "d" ? `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        checked: true,
        value: "d",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_d)}`;
        }
      }
    )}` : `${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        value: "d",
        class: "mb-6",
        group: currentAnswer
      },
      {
        group: ($$value) => {
          currentAnswer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(examData.option_d)}`;
        }
      }
    )}`}
      ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "mt-3" }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "outline",
            color: "primary",
            href: "/exam/questions/" + (examData.id - 1),
            disabled: examData.id === 1
          },
          {},
          {
            default: () => {
              return `Sebelumnya
        `;
            }
          }
        )}
        ${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "outline",
            color: "primary",
            href: "/exam/questions/" + (examData.id + 1),
            disabled: examData.id === questionsCount
          },
          {},
          {
            default: () => {
              return `Selanjutnya
        `;
            }
          }
        )}`;
      }
    })}</div></div>
  <div class="${"w-1/8 ml-48"}">${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
      default: () => {
        return `Waktu tersisa ${escape(timer.hoursLeft)}:${escape(timer.minutesLeft)}:${escape(timer.secondsLeft)}`;
      }
    })}
    ${validate_component(Card, "Card").$$render($$result, { color: "gray" }, {}, {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, { class: "mb-3" }, {}, {
          default: () => {
            return `Pilihan Soal`;
          }
        })}
      <div class="${"grid grid-cols-5"}">${each(questions, (question) => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              class: "w-12 h-12 mb-3",
              color: "primary",
              href: "/exam/questions/" + question.id
            },
            {},
            {
              default: () => {
                return `${escape(question.id)}`;
              }
            }
          )}`;
        })}</div>`;
      }
    })}
    ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "lg",
        class: "mt-6",
        color: "primary"
      },
      {},
      {
        default: () => {
          return `Selesai`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
