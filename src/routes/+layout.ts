// src/routes/+layout.ts
import { invalidate } from '$app/navigation';
import { supabase } from '$lib/supabaseClient';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth');
  const {
    data: { session }
  } = await supabase.auth.getSession();


  return { supabase, session };
};
