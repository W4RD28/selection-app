import "../../../chunks/index.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
const load = async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  return {
    user: session?.user,
    session,
    announcementData: null
  };
};
export {
  load
};
