<script lang="ts">
  import { Button, Heading, P, List, Li } from "flowbite-svelte";
  import { supabase } from "$lib/supabaseClient"
  import type { PageData } from "./$types"

  export let data: PageData
  $: ({session, testResult} = data)

  const handleWork = async () => {
    if (!testResult.exam_done_time) {
      // add 120 minutes to current time
      let date = new Date()
      let examDoneTime = new Date().setTime(date.getTime() + 2 * 60 * 60 * 1000)
      await supabase
        .from("test_results")
        .update({
          exam_done_time: new Date(examDoneTime),
          exam_done: "sedang"
        })
        .eq("user_id", session?.user?.id)
    }
  }
  const luluskan = async () => {
    let loading = true
    if (testResult.exam_done) {
      await supabase
        .from("test_results")
        .update({
          exam_result: "lulus"
        })
        .eq("user_id", session?.user?.id)
      
      let zoomRoom = await supabase
        .from('interview_room')
        .insert({
          user_id: session?.user?.id,
          room_link: "https://zoom.us/123456789",
          time: new Date(2023, 7, 10, 10, 10),
          date: new Date("2023-07-10")
    })
    }
    setTimeout(() => {}, 300)
    loading = false
  }
</script>

<svelte:head>
  <title>Tes Tertulis</title>
</svelte:head>

<div class="justify-center">
  <Heading tag="h2" class="mb-6">Halaman Tes Tertulis</Heading>
  {#if !testResult}
  <P class="mb-6 text-red-700">Status: Anda belum melakukan tes administrasi</P>
  {:else if testResult.exam_done == null}
  <P class="mb-6 text-red-700">Status: Anda belum melakukan tes tertulis</P>
  {:else if testResult.exam_done != null && testResult.exam_done == "sedang"}
  <P class="mb-6">Status: Anda sedang melakukan tes tertulis</P>
  {:else if testResult.exam_done == "selesai" && testResult.exam_result == "tidak lulus"}
  <P class="mb-6">Status: Anda telah melakukan tes tertulis dan tidak lulus</P>
  {:else if testResult.exam_done == "selesai" && testResult.exam_result == "lulus" && testResult.interview_done == null}
  <P class="mb-6">Status: Anda telah melakukan tes tertulis dan lulus</P>
  {:else}
  <P class="mb-6">Status: Anda telah melakukan tes tertulis</P>
  {/if}
  <div class="mb-6">
    <P class="mb-2">Tes memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Peserta yang dapat ikut hanyalah yang sudah lulus seleksi administrasi</Li>
      <Li>tes hanya dapat dilakukan maksimal 1 (satu) kali</Li>
      <Li>Soal berformat pilihan ganda</Li>
      <Li>Hasil tes digunakan untuk penentuan seleksi wawancara</Li>
    </List>
  </div>
  {#if !testResult}
  <Button href="/questionnaire" class="mt-6 mb-6" color="light">Laksanakan Tes Administrasi</Button>
  {:else if testResult.administration_result == "tidak lulus"}
  <P></P>
  {:else if testResult?.exam_done == null || testResult.exam_done == ""}
  <Button href="/exam/questions/1" on:click={handleWork} class="mt-6 mb-6" color="light">Laksanakan Tes</Button>
  {:else if testResult.exam_done == "selesai"}
  <Button href="/exam/result" class="mt-6 mb-6" color="light" on:click={luluskan}>Lihat Hasil Tes</Button>
  {/if}
</div>