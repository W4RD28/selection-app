import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect, error } from '@sveltejs/kit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    throw redirect(302, '/login')
  }

  const { data: examData } = await supabaseClient.from('questions')
    .select('*')
    .eq('id', event.params.slug)
    .single()

  return {
    user: session.user,
    examData,
  }
}