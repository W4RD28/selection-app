<script lang="ts">
  import { Button, Heading, P, List, Li } from "flowbite-svelte";
  import type { PageData } from './$types'
  import { onMount } from "svelte";
  import { supabase } from "$lib/supabaseClient"

  export let data: PageData
  $: ({testResult, session} = data)
  const luluskan = async () => {
    if (testResult.administration_done) {
      await supabase
        .from("test_results")
        .update({
          administration_result: "lulus"
        })
        .eq("user_id", session?.user?.id)
    }
  }
</script>

<svelte:head>
  <title>Tes administrasi</title>
</svelte:head>

<div class="justify-center">
  <Heading tag="h2" class="mb-6">Halaman Tes Administrasi</Heading>
  {#if !testResult}
  <P class="mb-6 text-red-700">Status: Anda belum menjawab tes administrasi</P>
  {:else if testResult.administration_done == "selesai" && testResult.administration_result == "tidak lulus"}
  <P class="mb-6">Status: Anda telah menjawab tes administrasi dan tidak lulus</P>
  {:else if testResult.administration_done == "selesai" && testResult.administration_result == "lulus"}
  <P class="mb-6">Status: Anda telah menjawab tes administrasi dan lulus</P>
  {:else if testResult.administration_done != null}
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
  <!-- Rendering Kondisional Berdasarkan Pengerjaan -->
  {#if !session || !testResult}
  <Button href="/questionnaire/questions" class="mt-6 mb-6" color="light">Jawab Tes Administrasi</Button>
  {:else if  testResult.administration_done == "selesai"}
  <Button href="/questionnaire/result" class="mt-6 mb-6" color="light" on:click={luluskan}>Lihat Hasil</Button>
  {/if}
</div>