<script>
  import { page } from '$app/stores'
  import { Card, Heading } from 'flowbite-svelte';
</script>

<div>
  <div class="bg-gray-300 ">
    <Heading tag="h1" class="mb-6 text-center">Kembangkan Kemampuan Anda</Heading>
    <Heading tag="h3" class="mb-6 text-center">Dengan mengikuti bootcamp yang diadakan oleh GoodCode</Heading>
  </div>
  <div>
    <div>
      <Heading tag="h3" class="mb-6">Materi yang kami sediakan</Heading>
    </div>
    <div>
        <Card>
          <Heading tag="h4" class="mb-6">Materi 1</Heading>
        </Card>
        <Card>
          <Heading tag="h4" class="mb-6">Materi 2</Heading>
        </Card>
        <Card>
          <Heading tag="h4" class="mb-6">Materi 3</Heading>
        </Card>
    </div>
  </div>
  <div>
    <Heading tag="h3" class="mb-6">Bagaimana cara mendaftar ke bootcamp ini?</Heading>
    <Heading tag="h4" class="mb-6">1. Daftar akun</Heading>
    <Heading tag="h4" class="mb-6">2. Ikuti ujian seleksi</Heading>
    <Heading tag="h4" class="mb-6">3. Ikuti ujian wawancara</Heading>
    <Heading tag="h4" class="mb-6">4. Tunggu hasil ujian</Heading>
    <Heading tag="h4" class="mb-6">5. Ikuti bootcamp</Heading>
  </div>
</div>

