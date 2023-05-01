<script>
  import { Radio, P, ButtonGroup, Button } from "flowbite-svelte"
</script>

<div class="mb-10">
  <P class="mb-6">Yang manakah di bawah ini yang merupakan fakta</P>
  <Radio name="answer" value="a" class="mb-3">Matahari terbit di sebelah timur</Radio>
  <Radio name="answer" value="b" class="mb-3">Kucing berkaki enam</Radio>
  <Radio name="answer" value="c" class="mb-3">Bumi itu rata</Radio>
  <Radio name="answer" value="d" class="mb-3">1 + 1 = 3</Radio>
  <ButtonGroup class="mt-6">
    <Button href="/exam/questions/1" color="light">Sebelumnya</Button>
    <Button href="/exam/questions/2" color="light">Selanjutnya</Button>
  </ButtonGroup>
</div>