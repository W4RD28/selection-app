import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, o as is_void } from "./index2.js";
import classNames from "classnames";
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "liClass"]);
  let { icon = false } = $$props;
  let { liClass = "" } = $$props;
  let classLi = classNames(liClass, icon && "flex items-center", $$props.class);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.liClass === void 0 && $$bindings.liClass && liClass !== void 0)
    $$bindings.liClass(liClass);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classLi) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "list", "position", "color", "olClass", "ulClass", "dlClass"]);
  let { tag = "ul" } = $$props;
  let { list = "disc" } = $$props;
  let { position = "inside" } = $$props;
  let { color = "text-gray-500 dark:text-gray-400" } = $$props;
  let { olClass = "list-decimal list-inside" } = $$props;
  let { ulClass = "max-w-md" } = $$props;
  let { dlClass = "max-w-md divide-y divide-gray-200  dark:divide-gray-700" } = $$props;
  let lists = {
    disc: "list-disc",
    none: "list-none",
    decimal: "list-decimal"
  };
  let positions = {
    inside: "list-inside",
    outside: "list-outside"
  };
  let classList = classNames(color, tag === "ul" ? ulClass : olClass, lists[list], positions[position], $$props.class);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.dlClass === void 0 && $$bindings.dlClass && dlClass !== void 0)
    $$bindings.dlClass(dlClass);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps), { class: escape_attribute_value(classList) }], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
export {
  List as L,
  Li as a
};
