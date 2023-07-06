import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    return {
      testResult: null
    }
  }

  let zoomRoom = await supabaseClient
    .from('interview_room')
    .select('*')
    .eq('user_id', session.user.id)
    .single()
  if (!zoomRoom) {
    zoomRoom = await supabaseClient
      .from('interview_room')
      .insert({
        user_id: session?.user?.id,
        room_link: "https://zoom.us/123456789",
        time: new Date(2023, 7, 10, 10, 10),
        date: new Date("2023-07-10")
    })
  }

  const { data: testResult } = await supabaseClient
    .from('test_results')
    .select('*')
    .eq('user_id', session.user.id)
    .single()

    return {
      session,
      testResult
    }
}