import { redirect } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";

// redirect if there is session
export async function load() {
  const { data, error } = await supabase.auth.getSession();
  if (data.session?.user != null) {
    throw redirect(302, "/dashboard");
  }
}