// src/routes/profile/+page.ts
import type { PageLoad, Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const ssr = false

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (session) {
    throw redirect(303, '/')
  }
  // const { data: tableData } = await supabaseClient.from('test').select('*')

  // return {
  //   user: session.user,
  //   tableData,
  // }
}

export const _actions: Actions = {
  register: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      throw new Error(error.message)
    }

    return redirect(303, '/profile')
  }
}