import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    throw redirect(302, '/login')
  }
  const { data: testResult } = await supabaseClient
    .from('test_results')
    .select('*')
    .eq('user_id', session?.user.id)
    .single()

  if (testResult && testResult.administration_result) {
    throw redirect(302, '/questionnaire/thanks')
  }
}

