import type { PageLoad } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const ssr = false

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  

  return {
    user: session?.user,
    session,
    announcementData: null
  }
}