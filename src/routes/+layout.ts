// src/routes/+layout.ts
import { invalidate } from '$app/navigation';
import { supabase } from '$lib/supabaseClient';

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth');
  const {
    data: { session }
  } = await supabase.auth.getSession();

  return { supabase, session };
};
