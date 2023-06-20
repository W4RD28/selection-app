import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    return {
      testResult: null,
    }
  }

  const { data: testResult } = await supabaseClient
    .from('test_results')
    .select('*')
    .eq('user_id', session.user.id)
    .single()
  
  return {
    testResult
  }
}