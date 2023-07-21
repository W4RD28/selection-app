import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    return {
      testResult: null
    }
  }

  let {data: interviewData} = await supabaseClient
    .from('interview_room')
    .select('*')
    .eq('user_id', session.user.id)
    .single()

  const { data: testResult } = await supabaseClient
    .from('test_results')
    .select('*')
    .eq('user_id', session.user.id)
    .single()

    return {
      interviewData,
      session,
      testResult
    }
}