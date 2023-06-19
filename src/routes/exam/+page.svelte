<script>
  import { Button, Heading, P, List, Li } from "flowbite-svelte";
</script>

<svelte:head>
  <title>Tes</title>
</svelte:head>

<div class="justify-center">
  <Heading tag="h2" class="mb-6">Halaman Tes Tertulis</Heading>
  <P class="mb-6 text-red-700">Status: Anda belum melakukan tes ini</P>
  <div class="mb-6">
    <P class="mb-2">Tes memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Peserta yang dapat ikut hanyalah yang sudah lulus seleksi administrasi</Li>
      <Li>tes hanya dapat dilakukan maksimal 1 (satu) kali</Li>
      <Li>Soal berformat pilihan ganda</Li>
      <Li>Hasil tes digunakan untuk penentuan seleksi wawancara</Li>
    </List>
  </div>
  <Button href="/exam/questions/1" class="mt-6 mb-6" color="light">Laksanakan Tes</Button>
  <Button href="/exam/result" class="mt-6 mb-6" color="light">Lihat Hasil Tes</Button>
</div>