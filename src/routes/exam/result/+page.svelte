<script lang="ts">
  import { Heading, P, Button } from "flowbite-svelte";
  import type { PageData } from "./$types"

  export let data: PageData
  $: ({examResult, testResults} = data)
</script>

<svelte:head>
  <title>Kelulusan Tes Tertulis</title>
</svelte:head>

{#if testResults.exam_result == null || testResults.exam_result == ""}
  <Heading tag="h2" class="mb-6 mt-16">Mohon Maaf</Heading>
  <P class="mb-6">Mohon tunggu hingga pengumuman kelulusan ujian ada</P>
{:else if testResults.exam_result == "lulus"}
  <Heading tag="h2" class="mb-6 mt-16">Selamat!</Heading>
  <P class="mb-6">Anda lulus dengan Nilai Ujian Tertulis {examResult}!</P>
  <P class="mb-6">Mohon tunggu pengumuman selanjutnya!</P>
{:else if testResults.exam_result == "tidak lulus"}
  <Heading tag="h2" class="mb-6 mt-16">Maaf!</Heading>
  <P class="mb-6">Anda tidak lulus dengan Nilai Ujian Tertulis {examResult}!</P>
  <P class="mb-6">Masih ada kesempatan selanjutnya!</P>
{/if}

<Button color="light" class="mb-6" href="/">Kembali ke dashboard</Button>