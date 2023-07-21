<script lang="ts">
  import { Button, Heading, P, List, Li, A } from "flowbite-svelte";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  export let data: PageData
  $: ({testResult, interviewData, session} = data)

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  onMount(() => {
    console.log(interviewData)
  })
</script>

<svelte:head>
  <title>Tes Wawancara</title>
</svelte:head>

<div>
  <Heading tag="h2" class="mb-6">Tes Wawancara</Heading>
  {#if !testResult}
  <P class="mb-6 text-red-700">Status: Anda belum melakukan tes administrasi</P>
  {:else if testResult.exam_done == null}
  <P class="mb-6 text-red-700">Status: Anda belum melakukan tes tertulis</P>
  {:else if testResult.exam_done == "selesai"}
  <P class="mb-6">Status: Anda telah melakukan tes tertulis</P>
  {:else}
  <P class="mb-6">Status: Anda telah melakukan tes wawancara</P>
  {/if}
  <div class="mb-6">
    <P class="mb-2">Wawancara memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Peserta yang dapat ikut hanyalah yang sudah lulus seleksi ujian</Li>
      <Li>Wawancara dilaksanakan secara daring</Li>
      <Li>Peserta masuk ke ruangan Zoom yang telah disediakan panitia</Li>
      <Li>Hasil wawancara akan menentukan kelulusan seleksi</Li>
    </List>
  </div>
  
  {#if testResult != null && testResult.exam_done == "selesai"}
  {#if interviewData == null}
  <Heading tag="h4" class="mb-3">Wawancara Anda akan dilaksanakan pada tanggal berikut</Heading>
  <P class="mb-3">Tanggal: Kamis, 24 Juli 2023</P>
  <P class="mb-3">Jam: 10:00:00 WIB</P>
  <P class="mb-6">Link Zoom: <A href="https://zoom.us/123456789">https://zoom.us/123456789</A></P>
  <P class="mb-6">Jika Anda tidak dapat mengikuti wawancara pada tanggal tersebut, silakan hubungi panitia</P>
  {:else}
  <Heading tag="h4" class="mb-3">Wawancara Anda akan dilaksanakan pada tanggal berikut</Heading>
  <P class="mb-3">Tanggal: {new Date(interviewData.date).toLocaleDateString("id", options)}</P>
  <P class="mb-3">Jam: {interviewData.time} WIB</P>
  <P class="mb-6">Link Zoom: <A href={interviewData.room_link}>{interviewData.room_link}</A></P>
  <P class="mb-6">Jika Anda tidak dapat mengikuti wawancara pada tanggal tersebut, silakan hubungi panitia</P>
  {/if}
  {:else if testResult != null && testResult.exam_done == null}
  <P class="mb-6">Anda belum melakukan tes tertulis</P>
  {/if}

  {#if !testResult}
    <Button href="/questionnaire" class="mt-6 mb-6" color="light">Laksanakan Tes Administrasi</Button>
  {:else if testResult.interview_done != "" || testResult.interview_done != null}
    <Button color="light" href="/interview/result">Lihat Hasil Wawancara</Button>
  {:else if testResult.interview_done != "" || testResult.interview_done != null}
    <Button color="light" href="/interview/result">Lihat Hasil Wawancara</Button>
  {/if}
</div>

