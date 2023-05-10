// src/routes/profile/+page.ts
import type { PageLoad, Actions } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    throw redirect(302, '/login')
  }
  // const { data: tableData } = await supabaseClient.from('test').select('*')

  // return {
  //   user: session.user,
  //   tableData,
  // }
}

export const _actions: Actions = {
  updateProfile: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const username = formData.get('username') as string
    const website = formData.get('website') as string
    const avatar_url = formData.get('avatar_url') as string
    const updated_at = new Date()

    const { error } = await supabase.auth.update({
      username,
      website,
      avatar_url,
      updated_at,
    })

    if (error) {
      throw new Error(error.message)
    }

    return redirect(303, '/profile')
  }
}
