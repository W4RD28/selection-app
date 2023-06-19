import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "../../../chunks/index.js";
const load = async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    throw redirect(302, "/login");
  }
  const { data: userData } = await supabaseClient.from("users").select("*").eq("id", session.user.id).single();
  return {
    user: session.user,
    userData
  };
};
export {
  load
};
