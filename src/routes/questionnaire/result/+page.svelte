<script lang="ts">
  import { Heading, P, Button } from "flowbite-svelte";
  import type { PageData } from "./$types"

  export let data: PageData
  $: ({testResult} = data)
</script>

<svelte:head>
  <title>Kelulusan Tes Administrasi</title>
</svelte:head>

{#if testResult.administration_result == null || testResult.administration_result == ""}
  <Heading tag="h2" class="mb-6 mt-16">Mohon Maaf</Heading>
  <P class="mb-6">Mohon tunggu hingga pengumuman kelulusan ujian ada</P>
{:else if testResult.administration_result == "lulus"}
  <Heading tag="h2" class="mb-6 mt-16">Selamat!</Heading>
  <P class="mb-6">Anda lulus Ujian Administrasi!</P>
  <P class="mb-6">Mohon tunggu pengumuman selanjutnya!</P>
{:else if testResult.administration_result == "tidak lulus"}
  <Heading tag="h2" class="mb-6 mt-16">Maaf!</Heading>
  <P class="mb-6">Anda tidak lulus Ujian Administrasi!</P>
  <P class="mb-6">Masih ada kesempatan selanjutnya!</P>
{/if}

<Button color="light" class="mb-6" href="/">Kembali ke dashboard</Button>