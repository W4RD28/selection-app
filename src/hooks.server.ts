import { supabase } from '$lib/supabaseClient'
import type { Handle } from '@sveltejs/kit';

export async function handle({event, resolve}) {
  event.locals.supabase = supabase

  event.locals.getSession = async () => {
    
    const { data: { session }, error } = await event.locals.supabase.auth.getSession();
    return session
  }

  return resolve(event, {

  });

}