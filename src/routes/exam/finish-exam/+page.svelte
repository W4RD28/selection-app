<script>
  import { A, Heading, P, Button } from "flowbite-svelte";

</script>
<svelte:head>
  <title>Selesai Ujian</title>
</svelte:head>

<div>
  <Heading tag="h2" class="mt-20 mb-6">Selamat!</Heading>
  <P class="mb-6">Anda telah menyelesaikan ujian ini</P>
  <P class="mb-6">Hasil ujian akan diberitahukan di halaman <A href="/exam/result">hasil ujian</A></P>
  <Button color="light" class="mb-6" href="/">Kembali ke dashboard</Button>
</div>
