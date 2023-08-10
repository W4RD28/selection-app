<script lang="ts">
  import { Radio, P, ButtonGroup, Button, Img, Card, Timeline } from "flowbite-svelte"
  import type { PageData } from './$types'
  import { getQuestionImage } from "$lib/helper";
  import { supabase } from "$lib/supabaseClient";
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte'
  import { invalidateAll } from "$app/navigation";
  import { writable } from "svelte/store";

  export let data: PageData
  $: ({ user, examData, questions, questionsCount, answer, userAnswer, timer, examDoneTime } = data)
  let loading = false
  let currentAnswer = writable(userAnswer)
  const interval = 1000

  function updateTimer() {
    const currentTime = new Date()
    timer.timeLeft = (examDoneTime - currentTime)/ 1000
    timer.hoursLeft = Math.floor(timer.timeLeft / 3600)
    timer.hoursLeft = timer.hoursLeft < 10 ? '0' + timer.hoursLeft : timer.hoursLeft
    timer.minutesLeft = Math.floor((timer.timeLeft % 3600) / 60)
    timer.minutesLeft = timer.minutesLeft < 10 ? '0' + timer.minutesLeft : timer.minutesLeft
    timer.secondsLeft = Math.floor((timer.timeLeft % 3600) % 60)
    timer.secondsLeft = timer.secondsLeft < 10 ? '0' + timer.secondsLeft : timer.secondsLeft
  }

  const unsubscribeAnswer = currentAnswer.subscribe(async (data) => {
      if (data !== null) {
        upsertUserAnswer()
      }
  })
  async function delayedExecution() {
    setInterval(updateTimer, 100)
    if (timer.timeLeft <= 0) doneExam()
  }
  afterUpdate(async () => {
    currentAnswer.set(userAnswer)
  })
  onMount(() => {
    delayedExecution()
  })
  onDestroy(unsubscribeAnswer)

  const doneExam = async () => {
    await supabase
      .from('test_results')
      .update(
        {
          exam_done: "selesai"
        }
      )
      .eq("user_id", user?.id)
  }

  const upsertUserAnswer = async () => {
    loading = true

    if ($currentAnswer == null) {
      loading = false
      return
    }

    if (answer == null) {
      const { data, error } = await supabase
        .from('user_answers')
        .insert(
          {
            user_id: user.id,
            question_id: examData.id,
            answer: $currentAnswer
          }
        )
    }

    const { data, error } = await supabase
      .from('user_answers')
      .update(
        {
          answer: $currentAnswer
        },
      )
      .eq('user_id', user.id)
      .eq('question_id', examData.id)

    loading = false
  }
</script>

<svelte:head>
  <title>Ujian Tertulis</title>
</svelte:head>


<!-- Exam Question -->
<div class="container grid grid-cols-2">
  <div>
    <div>
      <h1 class="mb-6">Soal {examData.id}</h1>
      {#if examData.image}
        <Img src={getQuestionImage(examData.image)} size="md" alt="Question Image" class="mb-6" />
      {/if}
      <P class="mb-6">{examData.question}</P>
      <Radio bind:group={$currentAnswer} value="a" class="mb-6">
        {examData.option_a}
      </Radio>
      <Radio bind:group={$currentAnswer} value="b" class="mb-6">
        {examData.option_b}
      </Radio>
      <Radio bind:group={$currentAnswer} value="c" class="mb-6">
        {examData.option_c}
      </Radio>
      <Radio bind:group={$currentAnswer} value="d" class="mb-6">
        {examData.option_d}
      </Radio>
      <ButtonGroup class="mt-3">
        <Button variant="outline" color="primary" href="/exam/questions/{examData.id - 1}" disabled={examData.id === 1}>
          Sebelumnya
        </Button>
        <Button variant="outline" color="primary" href="/exam/questions/{examData.id + 1}" disabled={examData.id === questionsCount}>
          Selanjutnya
        </Button>
      </ButtonGroup>
    </div>
    
  </div>
  <div class="w-1/8 ml-48">
    <P class="mb-6">Waktu tersisa {timer.hoursLeft}:{timer.minutesLeft}:{timer.secondsLeft}</P>
    <Card color="gray">
      <P class="mb-3">Pilihan Soal</P>
      <div class="grid grid-cols-5">
        {#each questions as question }
          <Button class="w-12 h-12 mb-3" color="primary" href="/exam/questions/{question.id}">{question.id}</Button>
        {/each}
      </div>
    </Card>
    <Button size="lg" class="mt-6" color="primary" on:click={doneExam} href="/exam/finish-exam">Selesai</Button>
  </div>
</div>