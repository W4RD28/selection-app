import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)

  const { data: announcementData } = await supabaseClient
    .from('announcement')
    .select('*')
    .eq('id', event.params.slug)
    .single()

  let announcementDate: any = new Date(announcementData.created_at)
  announcementDate = announcementDate.toLocaleDateString()

  return {
    session,
    user: session?.user,
    announcementData,
    announcementDate,
  }
}