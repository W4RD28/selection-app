<script lang="ts">
  import { Heading, P, A, } from 'flowbite-svelte'
  import type { PageData } from "./$types"

  export let data: PageData
  $: ({user, session, announcementData} = data)
</script>

<svelte:head>
  <title>Pengumuman</title>
</svelte:head>

<div class="flex flex-col md:w-1/2 mb-10">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Pengumuman</Heading>
</div> 

{#each announcementData as announcement}
  <div>
    <A href="/announcements/{announcement.id}"><Heading class="mb-1 font-semibold" tag="h4">{announcement.title}</Heading></A>
    <Heading class="mb-3 font-semibold" tag="h6">{new Date(announcement.created_at).toLocaleDateString("id-ID")}</Heading>
    <P class="mb-6">{announcement.content.substr(0, 300)}...</P>
  </div>
{/each}
