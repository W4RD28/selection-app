<script lang="ts">
  import { Heading, P } from "flowbite-svelte";
  import type { PageData } from "./$types"

  export let data: PageData
  $: ({testResult} = data)

</script>

<svelte:head>
  <title>Kelulusan Tes Tertulis</title>
</svelte:head>

{#if testResult != null && testResult.interview_result == "lulus"}
<Heading tag="h2" class="mb-6 mt-16">Selamat!</Heading>
<P class="mb-6">Anda telah lulus seleksi bootcamp!</P>
<P class="mb-20">Kami akan mengontaki Anda melalui email dalam waktu 2 minggu</P>
{:else if testResult.interview_result == "tidak lulus"}
<Heading tag="h2" class="mb-6 mt-16">Maaf!</Heading>
<P class="mb-6">Anda belum lulus seleksi bootcamp</P>
<P class="mb-20">Jangan putus asa, masih ada kesempatan lagi untuk Anda!</P>
{/if}