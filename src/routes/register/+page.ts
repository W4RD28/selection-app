import type { PageLoad } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (session) {
    throw redirect(303, '/')
  }
}