<script lang="ts">
  import { Heading, P } from "flowbite-svelte";
  import type { PageData } from "./$types"

  export let data: PageData
  $: ({examResult} = data)
</script>

<svelte:head>
  <title>Kelulusan Tes Tertulis</title>
</svelte:head>

<Heading tag="h2" class="mb-6 mt-16">Selamat!</Heading>
<P class="mb-6">Nilai Ujian Tertulis Anda {examResult}</P>
<P class="mb-20">Mohon tunggu pengumuman selanjutnya!</P>