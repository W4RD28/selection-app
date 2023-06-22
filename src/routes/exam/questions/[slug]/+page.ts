import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    throw redirect(302,'/login')
  }

  const { data: testResult } = await supabaseClient
    .from('test_results')
    .select('*')
    .eq('user_id', session?.user.id)
    .single()

  const examDone = new Date(testResult.exam_done_time)
  const currentTime = new Date()
  if (testResult.administration_result == null){
    throw redirect(302,'/questionnaire')
  }
  if (testResult.exam_done != null || examDone < currentTime){
    await supabaseClient
      .from('test_results')
      .update(
        {
          exam_done: 'selesai'
        }
      )
      .eq('user_id', session?.user.id)
      throw redirect(302,'/exam/finish-exam')
  }

  let timeLeft: any = (examDone - currentTime)/ 1000
  let hoursLeft: any = Math.floor(timeLeft / 3600)
  hoursLeft = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
  let minutesLeft: any = Math.floor((timeLeft % 3600) / 60)
  minutesLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
  let secondsLeft: any = Math.floor((timeLeft % 3600) % 60)
  secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft

  let timer = {
    hoursLeft,
    minutesLeft,
    secondsLeft
  }

  const { data, count } = await supabaseClient.from('questions')
    .select('*', {count: 'exact'})

  const { data: examData } = await supabaseClient.from('questions')
    .select('*')
    .eq('id', event.params.slug)
    .single()

  const { data: answer } = await supabaseClient.from('user_answers')
    .select('id, answer')
    .eq('user_id', session.user.id)
    .eq('question_id', event.params.slug)
    .single()

  return {
    user: session.user,
    examData,
    questions: data,
    questionsCount: count,
    answer,
    userAnswer: answer?.answer,
    timer
  }
}
