<script lang="ts">
  import { Button, Img, P, Heading } from "flowbite-svelte";


</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<!--image side-by-side with text and button-->
<div class="flex flex-col  md:flex-row md:items-center md:justify-between mb-16">
  <div class="flex flex-col md:w-1/2">
    <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900 text-center">Tingkatkan Keahlian Anda</Heading>
    <!--Short description about bootcamp-->
    <P class="mt-4 text-gray-600 text-center">GoodCode Bootcamp adalah program pelatihan yang bertujuan untuk meningkatkan keahlian Anda dalam bidang pemrograman.</P>
    <Button color="primary" class="w-1/2 mt-8 self-center" ref="/register">Daftar Sekarang</Button>
  </div>
  <div class="flex flex-col mt-4 md:mt-0 md:w-1/2 md:justify-end md:flex-row md:items-center">
    <Img src="https://images.unsplash.com/photo-1612837017391-5e9b1b0d0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="course" class="w-full h-32 object-cover rounded-t-lg"/>
  </div>
</div>

<!--Preview the three courses with cards side-by-side-->
<div class="flex flex-col md:w-1/2">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Kelas Kami</Heading>
</div>
<div class="flex flex-col mt-8 md:flex-row md:items-center md:justify-between mb-16">
  <div class="flex flex-col w-full md:w-1/3">
    <div class="flex flex-col items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
      <Img src="https://images.unsplash.com/photo-1612837017391-5e9b1b0d0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="course" class="w-full h-32 object-cover rounded-t-lg"/>
      <div class="flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg">
        <Heading tag="h3" class="text-xl text-center font-bold">Frontend</Heading>
        <P class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget elementum commodo, sem nisl aliquet ex, quis aliquam nisl nunc vel nunc.</P>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full mt-8 md:w-1/3 md:mt-0 md:ml-4">
    <div class="flex flex-col items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
      <Img src="https://images.unsplash.com/photo-1612837017391-5e9b1b0d0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="course" class="w-full h-32 object-cover rounded-t-lg"/>
      <div class="flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg">
        <Heading tag="h3" class="text-xl text-center font-bold">Backend</Heading>
        <P class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget elementum commodo, sem nisl aliquet ex, quis aliquam nisl nunc vel nunc.</P>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full mt-8 md:w-1/3 md:mt-0 md:ml-4">
    <div class="flex flex-col items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
      <Img src="https://images.unsplash.com/photo-1612837017391-5e9b1b0d0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="course" class="w-full h-32 object-cover rounded-t-lg"/>
      <div class="flex flex-col items-center justify-center w-full h-32 bg-white rounded-b-lg">
        <Heading tag="h3" class="text-xl text-center font-bold">Mobile</Heading>
        <P class="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget elementum commodo, sem nisl aliquet ex, quis aliquam nisl nunc vel nunc.</P>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col md:w-1/2">
  <Heading tag="h2" class="text-4xl font-bold leading-tight text-gray-900">Alur Pendaftaran</Heading>
</div>
