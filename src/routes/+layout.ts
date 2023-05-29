// src/routes/+layout.ts
import { invalidate } from '$app/navigation';
import { supabase } from '$lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth');
  const {
    data: { session }
  } = await supabase.auth.getSession();
  if (session) {
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('id', session.user.id)
      .single();
    
    if (user) {
      const avatar_url = user.avatar_url;
    }

    return { supabase, session, user };
  }

  return { supabase, session, user: null };
};
