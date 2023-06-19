<script lang="ts">
import { Heading, P, Img } from "flowbite-svelte";

</script>

<svelte:head>
  <title>Tentang</title>
</svelte:head>

<!--image side-by-side with text-->
<div class="flex flex-col md:flex-row md:items-center md:justify-between mt-10 mb-10">
  <div class="flex flex-col md:w-1/2 pr-5">
    <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900 text-center">Tentang Digmar</Heading>
    <!--Short description about bootcamp-->
    <P class="mt-4 text-gray-600 text-center">Digmar adalah program pelatihan yang bertujuan untuk meningkatkan keahlian Anda dalam bidang digital marketing.</P>
  </div>
  <div class="flex flex-col mt-4 md:mt-0 md:w-1/2 md:justify-end md:flex-row md:items-center">
    <Img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=906&q=80" alt="course" class="w-full h-1/2 object-cover rounded-lg"/>
  </div>
</div>