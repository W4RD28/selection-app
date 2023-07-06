import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    throw redirect(302,'/login')
  }
  const { data: testResults } = await supabaseClient.from('test_results')
    .select('*')
    .eq('user_id', session?.user.id)
    .single()

  if (!testResults) throw redirect(302, '/exam')
  if (!testResults.exam_done) throw redirect(302, '/exam')

  const { data: examAnswer } = await supabaseClient
    .from('user_answers')
    .select(`*`)
    .eq('user_id', session?.user.id)

  const { data: examQuestions } = await supabaseClient
    .from('questions')
    .select(`*`, { count: 'exact' })

  let count = 0
  for (const question of examQuestions) {
    for (const answer of examAnswer) {
      if (question.id === answer.question_id && answer.answer === question.answer) {
        count++
      }
    }
  }
  const examResult = count / examQuestions.length * 100

  return {
    examResult,
    testResults
  }
}