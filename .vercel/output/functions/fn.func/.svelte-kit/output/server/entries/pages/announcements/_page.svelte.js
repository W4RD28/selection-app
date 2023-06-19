import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { A } from "../../../chunks/A.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { P } from "../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ixyxts_START -->${$$result.title = `<title>Pengumuman</title>`, ""}<!-- HEAD_svelte-1ixyxts_END -->`, ""}

<div class="${"flex flex-col md:w-1/2 mb-10"}">${validate_component(Heading, "Heading").$$render(
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

<div>${validate_component(A, "A").$$render($$result, { href: "/announcements/1" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, { class: "mb-1 font-semibold", tag: "h4" }, {}, {
        default: () => {
          return `Lorem Ipsum`;
        }
      })}`;
    }
  })}
  ${validate_component(Heading, "Heading").$$render($$result, { class: "mb-3 font-semibold", tag: "h6" }, {}, {
    default: () => {
      return `28/06/2023`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat luctus tortor , a pharetra dui venenatis eleifend. Vivamus vitae diam feugiat, dapibus lectus in, consectetur lacus. Morbi bibendum nibh ligula, in ultricies ante faucibus nec. Phasellus sagittis lacus lectus, sit amet molestie dui vestibulum sit amet. Ut et sapien dui. Praesent semper ex leo, ac dapibus erat maximus non. Aenean blandit odio tincidunt tortor aliquet, id molestie leo fringilla. Nulla pell...`;
    }
  })}</div>
<div>${validate_component(Heading, "Heading").$$render($$result, { class: "mb-1 font-semibold", tag: "h4" }, {}, {
    default: () => {
      return `Lorem Ipsum`;
    }
  })}
  ${validate_component(Heading, "Heading").$$render($$result, { class: "mb-3 font-semibold", tag: "h6" }, {}, {
    default: () => {
      return `28/06/2023`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat luctus tortor , a pharetra dui venenatis eleifend. Vivamus vitae diam feugiat, dapibus lectus in, consectetur lacus. Morbi bibendum nibh ligula, in ultricies ante faucibus nec. Phasellus sagittis lacus lectus, sit amet molestie dui vestibulum sit amet. Ut et sapien dui. Praesent semper ex leo, ac dapibus erat maximus non. Aenean blandit odio tincidunt tortor aliquet, id molestie leo fringilla. Nulla pell...`;
    }
  })}</div>
<div>${validate_component(Heading, "Heading").$$render($$result, { class: "mb-1 font-semibold", tag: "h4" }, {}, {
    default: () => {
      return `Lorem Ipsum`;
    }
  })}
  ${validate_component(Heading, "Heading").$$render($$result, { class: "mb-3 font-semibold", tag: "h6" }, {}, {
    default: () => {
      return `28/06/2023`;
    }
  })}
  ${validate_component(P, "P").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat luctus tortor , a pharetra dui venenatis eleifend. Vivamus vitae diam feugiat, dapibus lectus in, consectetur lacus. Morbi bibendum nibh ligula, in ultricies ante faucibus nec. Phasellus sagittis lacus lectus, sit amet molestie dui vestibulum sit amet. Ut et sapien dui. Praesent semper ex leo, ac dapibus erat maximus non. Aenean blandit odio tincidunt tortor aliquet, id molestie leo fringilla. Nulla pell...`;
    }
  })}</div>`;
});
export {
  Page as default
};
