<script>
  import { Button, Heading, P, List, Li } from "flowbite-svelte";
</script>

<div class="justify-center">
  <Heading tag="h2" class="mb-6">Halaman ujian</Heading>
  <P class="mb-6 text-red-700">Status: Anda belum melakukan ujian ini</P>
  <div class="mb-6">
    <P class="mb-2">Ujian memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Peserta yang dapat ikut hanyalah yang sudah lulus seleksi administrasi</Li>
      <Li>Ujian hanya dapat dilakukan maksimal 2 (dua) kali</Li>
      <Li>Soal berformat pilihan ganda</Li>
      <Li>Hasil ujian digunakan untuk penentuan seleksi wawancara</Li>
    </List>
  </div>
  <Button href="/exam/questions/1" class="mt-6 mb-6" color="light">Laksanakan Ujian</Button>
</div>