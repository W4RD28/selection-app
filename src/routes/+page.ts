import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  
  const { data: announcementData } = await supabaseClient
    .from('announcement')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  return {
    user: session?.user,
    session,
    announcementData
  }
}