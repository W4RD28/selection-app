<script lang="ts">
import { Heading, P, Img } from "flowbite-svelte";

</script>

<svelte:head>
  <title>Tentang</title>
</svelte:head>

<!--image side-by-side with text-->
<div class="flex flex-col md:flex-row md:items-center md:justify-between mt-32 mb-20">
  <div class="flex flex-col md:w-1/2">
    <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900 text-center">Tentang GoodCode</Heading>
    <!--Short description about bootcamp-->
    <P class="mt-4 text-gray-600 text-center">GoodCode Bootcamp adalah program pelatihan yang bertujuan untuk meningkatkan keahlian Anda dalam bidang pemrograman.</P>
  </div>
  <div class="flex flex-col mt-4 md:mt-0 md:w-1/2 md:justify-end md:flex-row md:items-center">
    <Img src="https://images.unsplash.com/photo-1612837017391-5e9b1b0d0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="course" class="w-full h-32 object-cover rounded-t-lg"/>
  </div>
</div>