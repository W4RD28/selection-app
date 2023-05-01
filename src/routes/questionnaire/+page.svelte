<script>
  import { Button, Heading, P, List, Li } from "flowbite-svelte";
</script>

<svelte:head>
  <title>Kuesioner</title>
</svelte:head>

<div class="justify-center">
  <Heading tag="h2" class="mb-6">Halaman kuesioner</Heading>
  <P class="mb-6 text-red-700">Status: Anda belum menjawab kuesioner</P>
  <div class="mb-6">
    <P class="mb-2">Kuesioner memiliki ketentuan berikut:</P>
    <List tag="ul" class="space-y-1 text-black">
      <Li>Sebagai syarat mengerjakan ujian</Li>
      <Li>Peserta harus menjawab kuesioner sejujur mungkin</Li>
      <Li>Kuesioner hanya bisa diambil sekali</Li>
      <Li>Hasil kuesioner dijadikan pertimbangan kelayakan peserta</Li>
    </List>
  </div>
  <Button href="/questionnaire/questions" class="mt-6 mb-6" color="light">Jawab Kuesioner</Button>
</div>