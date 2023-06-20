<script lang="ts">
  import { Radio, P, ButtonGroup, Button, Img, Dropdown, DropdownItem, Chevron, Card } from "flowbite-svelte"
  import type { PageData } from './$types'
  import { getQuestionImage } from "$lib/helper";
  import { supabase } from "$lib/supabaseClient";
  import { onMount } from 'svelte'
  import { invalidateAll } from "$app/navigation";

  export let data: PageData
  $: ({ user, examData, questions, questionsCount, answer, userAnswer, timer } = data)
  let loading = false
  let currentAnswer: string

  onMount(() => {
    const interval = setInterval(() => {
      invalidateAll()
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

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

    if (answer == null) {
      const { data, error } = await supabase
        .from('user_answers')
        .insert(
          {
            user_id: user.id,
            question_id: examData.id,
            answer: currentAnswer
          }
        )
    }

    const { data, error } = await supabase
      .from('user_answers')
      .update(
        {
          answer: currentAnswer
        },
      )
      .eq('user_id', user.id)
      .eq('question_id', examData.id)

    loading = false
  }
</script>

<svelte:head>
  <title>Ujian</title>
</svelte:head>


<!-- Exam Question -->
<div class="container grid grid-cols-2">
  <div>
    <div>
      <h1 class="mb-6">Soal {examData.id}</h1>
      {#if examData.image}
        <Img src={getQuestionImage(examData.image)} alt="Question Image" class="mb-6" />
      {/if}
      <P class="mb-6">{examData.question}</P>
      {#if userAnswer == "a"}
        <Radio bind:group={currentAnswer} checked on:change={upsertUserAnswer} value="a" class="mb-6">
          {examData.option_a}
        </Radio>
      {:else}
        <Radio bind:group={currentAnswer} on:change={upsertUserAnswer} value="a" class="mb-6">
          {examData.option_a}
        </Radio>
      {/if}
      {#if userAnswer == "b"}
        <Radio bind:group={currentAnswer} checked on:change={upsertUserAnswer} value="b" class="mb-6">
          {examData.option_b}
        </Radio>
      {:else}
        <Radio bind:group={currentAnswer} on:change={upsertUserAnswer} value="b" class="mb-6">
          {examData.option_b}
        </Radio>
      {/if}
      {#if userAnswer == "c"}
        <Radio bind:group={currentAnswer} checked on:change={upsertUserAnswer} value="c" class="mb-6">
          {examData.option_c}
        </Radio>
      {:else}
        <Radio bind:group={currentAnswer} on:change={upsertUserAnswer} value="c" class="mb-6">
          {examData.option_c}
        </Radio>
      {/if}
      {#if userAnswer == "d"}
        <Radio bind:group={currentAnswer} checked on:change={upsertUserAnswer} value="d" class="mb-6">
          {examData.option_d}
        </Radio>
      {:else}
        <Radio bind:group={currentAnswer} on:change={upsertUserAnswer} value="d" class="mb-6">
          {examData.option_d}
        </Radio>
      {/if}
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