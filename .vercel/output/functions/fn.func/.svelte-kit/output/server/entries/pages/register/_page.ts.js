import { r as redirect } from "../../../chunks/index.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
const load = async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  if (session) {
    throw redirect(303, "/");
  }
};
export {
  load
};
