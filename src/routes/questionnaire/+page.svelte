<script lang="ts">
  import { Button, Heading, P, List, Li } from "flowbite-svelte";
  import type { PageData } from './$types'
  import { onMount } from "svelte";

  export let data: PageData
  $: ({testResult} = data)
  onMount(() => console.log(testResult))
</script>

<svelte:head>
  <title>Tes administrasi</title>
</svelte:head>

<div class="justify-center">
  <Heading tag="h2" class="mb-6">Halaman Tes Administrasi</Heading>
  {#if !testResult}
  <P class="mb-6 text-red-700">Status: Anda belum menjawab tes administrasi</P>
  {:else}
  <P class="mb-6">Status: Anda telah menjawab tes administrasi</P>
  {/if}
  <div class="mb-6">
    <P class="mb-2">Tes administrasi memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Sebagai syarat mengerjakan ujian</Li>
      <Li>Peserta harus menjawab tes administrasi sejujur mungkin</Li>
      <Li>Tes administrasi hanya bisa diambil sekali</Li>
      <Li>Hasil tes administrasi dijadikan pertimbangan kelayakan peserta</Li>
    </List>
  </div>
  <Button href="/questionnaire/questions" class="mt-6 mb-6" color="light">Jawab Tes administrasi</Button>
</div>