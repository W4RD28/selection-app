import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    window.location.href = '/login'
  }
  const { data: testResult } = await supabaseClient
    .from('test_results')
    .select('*')
    .eq('user_id', session?.user.id)
    .single()

  if (testResult && testResult.administration_result) {
    window.location.href = '/questionnaire/thanks'
  }
}

