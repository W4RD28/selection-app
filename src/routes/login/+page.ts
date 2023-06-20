// src/routes/profile/+page.ts
import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect, fail } from '@sveltejs/kit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (session) {
    throw redirect(303, '/')
  }
}