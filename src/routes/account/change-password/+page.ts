import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    window.location.href = '/login'
  }
  const { data: userData } = await supabaseClient.from('users')
    .select('*')
    .eq('id', session?.user.id)
    .single()

  return {
    user: session?.user,
    userData,
  }
}