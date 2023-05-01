<script>
  import { Button, Heading, P, List, Li, A } from "flowbite-svelte";
</script>

<svelte:head>
  <title>Wawancara</title>
</svelte:head>

<div>
  <Heading tag="h2" class="mb-6">Wawancara</Heading>
  <div class="mb-6">
    <P class="mb-2">Wawancara memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Peserta yang dapat ikut hanyalah yang sudah lulus seleksi ujian</Li>
      <Li>Wawancara dilaksanakan secara daring</Li>
      <Li>Peserta masuk ke ruangan Zoom yang telah disediakan panitia</Li>
      <Li>Hasil wawancara akan menentukan kelulusan seleksi</Li>
    </List>
  </div>

  <Heading tag="h4" class="mb-3">Wawancara Anda akan dilaksanakan pada tanggal berikut</Heading>
  <P class="mb-3">Tanggal: 22 April 2023</P>
  <P class="mb-3">Jam: 10:00 - 11:00 WIB</P>
  <P class="mb-3">Link Zoom: <A href="https://zoom.us/123456789">https://zoom.us/123456789</A></P>
</div>

