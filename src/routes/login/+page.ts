// src/routes/profile/+page.ts
import type { Actions, PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect, fail } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

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
  signin: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
          values: {
            email
          }
        });
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email
        }
      });
    }

    throw redirect(303, '/dashboard');
  },
}