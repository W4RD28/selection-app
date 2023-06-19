import "../../chunks/index2.js";
import { s as supabase } from "../../chunks/supabaseClient.js";
const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth");
  const {
    data: { session }
  } = await supabase.auth.getSession();
  if (session) {
    const { data: user } = await supabase.from("users").select("*").eq("id", session.user.id).single();
    if (user) {
      user.avatar_url;
    }
    return { supabase, session, user };
  }
  return { supabase, session, user: null };
};
export {
  load
};
