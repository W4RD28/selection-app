<script lang="ts">
  import { Radio, P, ButtonGroup, Button, Img } from "flowbite-svelte"
  import type { PageData } from './$types'
  import { getQuestionImage } from "$lib/helper";
  
  export let data: PageData
  $: ({ session, user, examData } = data)


</script>

<svelte:head>
  <title>Ujian</title>
</svelte:head>

<div class="mb-6 mt-6">
  {#if examData.question_image}
    {#await getQuestionImage(examData.question_image) then questionImage}
      <Img src={questionImage} alt="question image" class="mb-6" />
    {/await}
  {/if}
  <P class="mb-6">{examData.question}</P>
  <div class="mb-6">
    <Radio name="radio" value="a" class="mb-3">{examData.option_a}</Radio>
    <Radio name="radio" value="b" class="mb-3">{examData.option_b}</Radio>
    <Radio name="radio" value="c" class="mb-3">{examData.option_c}</Radio>
    <Radio name="radio" value="d" class="mb-3">{examData.option_d}</Radio>
  </div>

  <ButtonGroup class="mt-10 mb-10">
    <Button color="primary" variant="outline" class="mr-3">Kembali</Button>
    <Button color="primary" variant="outline" class="mr-3">Lanjut</Button>
  </ButtonGroup>
</div>

