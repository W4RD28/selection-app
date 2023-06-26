<script lang="ts">
  import { Button, Img, P, Heading, A } from "flowbite-svelte";
  import type { PageData } from "./$types";
  import alur from "../alur.svg"

  export let data: PageData
  $: ({ session, user, announcementData } = data)

</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>


{#if data.session}
<!-- Announcement cards with data such as date of announcement and title -->
<div class="flex flex-col md:w-1/2">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Pengumuman</Heading>
</div>
<div class="flex flex-col mt-6 md:flex-row md:items-center md:justify-between">
  {#each announcementData as announcement}
  <div class="flex flex-col w-full md:w-1/3">
    <A href="/announcements/{announcement.id}">
    <div class="flex flex-col items-center justify-center w-full h-30 p-10">
      <Heading tag="h3" class="text-xl text-left font-bold">{announcement.title}</Heading>
      <Heading tag="h5" class="text-left" style="font-size: 12px">{new Date(announcement.created_at).toLocaleDateString('id-ID')}</Heading>
    </div>
    </A> 
  </div>
  {/each}
</div >
<P class="mt-1 text-gray-600 text-left pl-10 mb-10">Lihat semua pengumuman <A href="/announcements">disini</A></P>

{:else if !data.session}
<!--image side-by-side with text and button-->
<div class="flex flex-col  md:flex-row md:items-center md:justify-between mb-16">
  <div class="flex flex-col md:w-1/2">
    <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900 text-center">Tingkatkan Keahlian Anda</Heading>
    <!--Short description about bootcamp-->
    <P class="mt-4 text-gray-600 text-center">Digmar adalah program pelatihan yang bertujuan untuk meningkatkan keahlian Anda dalam bidang digital marketing.</P>
    <Button color="primary" class="w-1/2 mt-8 self-center" href="/register">Daftar Sekarang</Button>
  </div>
  <div class="flex flex-col mt-4 md:mt-0 md:w-1/2 md:justify-end md:flex-row md:items-center">
    <Img src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="course" class="w-11/12 h-1/2 object-cover rounded-lg"/>
  </div>
</div>
{/if}

<!--Preview the three courses with cards side-by-side-->
<div class="flex flex-col md:w-1/2">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Kelas Kami</Heading>
</div>
<div class="flex flex-col mt-8 md:flex-row md:items-center md:justify-between mb-16">
  <div class="flex flex-col w-full md:w-1/3">
    <div class="flex flex-col items-center justify-center w-full h-80 rounded-lg">
      <Img src="https://unsplash.com/photos/5fNmWej4tAA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8fHwxNjg3NzI3Mjk3fDA&force=true&w=640" alt="course" class="w-full h-full object-cover rounded-lg mb-3"/>
      <div class="flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg">
        <Heading tag="h3" class="text-xl text-center font-bold">Karyawan</Heading>
        <P class="mt-2 text-gray-600">Untuk pekerja yang ingin meningkatkan keefektifan marketing di Industri 4.0</P>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full mt-8 md:w-1/3 md:mt-0 md:ml-4">
    <div class="flex flex-col items-center justify-center w-full h-80 rounded-lg">
      <Img src="https://unsplash.com/photos/aWf7mjwwJJo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg3Nzc3OTc3fA&force=true&w=640" alt="course" class="w-full h-full object-cover rounded-lg mb-3"/>
      <div class="flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg">
        <Heading tag="h3" class="text-xl text-center font-bold">Pebisnis</Heading>
        <P class="mt-2 text-gray-600">Kelas ini ditujukan untuk pemilik bisnis yang ingin memajukan produknya secara digital</P>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full mt-8 md:w-1/3 md:mt-0 md:ml-4">
    <div class="flex flex-col items-center justify-center w-full h-80 rounded-lg">
      <Img src="https://unsplash.com/photos/hC_796Wu-VY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMGxhcHRvcHxlbnwwfHx8fDE2ODc3Nzg3NzV8MA&force=true&w=640" alt="course" class="w-full h-full object-cover rounded-lg mb-3"/>
      <div class="flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg">
        <Heading tag="h3" class="text-xl text-center font-bold">Profesional</Heading>
        <P class="mt-2 text-gray-600">Untuk orang-orang yang ingin memajukan hal-hal yang dapat memajukan masyarakat</P>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col md:w-full mb-6">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Alur Pendaftaran</Heading>
  <Img src={alur} size="xl"/>
</div>

{#if !data.session}
<div class="flex flex-col md:w-1/2">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Pengumuman</Heading>
</div>
<div class="flex flex-col mt-6 md:flex-row md:items-center md:justify-between">
  {#each announcementData as announcement}
  <div class="flex flex-col w-full md:w-1/3">
    <A href="/announcements/{announcement.id}">
    <div class="flex flex-col items-center justify-center w-full h-30 p-10">
      <Heading tag="h3" class="text-xl text-left font-bold">{announcement.title}</Heading>
      <Heading tag="h5" class="text-left" style="font-size: 12px">{new Date(announcement.created_at).toLocaleDateString('id-ID')}</Heading>
    </div>
    </A> 
  </div>
  {/each}
</div >
<P class="mt-1 text-gray-600 text-left pl-10 mb-10">Lihat semua pengumuman <A href="/announcements">disini</A></P>
{/if}