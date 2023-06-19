<script lang="ts">
  import { A, Heading, P } from "flowbite-svelte";
  import type { PageData } from "./$types"
  import { onMount } from "svelte";

  export let data: PageData
  $: ({user, session, announcementData, announcementDate} = data)

  onMount(() => {
    console.log(announcementData)
  })
</script>
<svelte:head>
  <title>Pengumuman</title>
</svelte:head>

<div>
  <A href="/" class="mb-10">Kembali ke Dashboard</A>
</div>

<div class="mb-10">
  <Heading tag="h1" class="text-2xl text-center font-semibold mb-3">{announcementData.title}</Heading>
  <Heading class="text-left font-semibold text-sm mb-10">{announcementDate}</Heading>
  <P class="text-justify">{announcementData.content}</P>
</div>

<div class="items-left">
  <P class="mb-6">Terima Kasih</P>
  <P>Tim Digmar</P>
</div>