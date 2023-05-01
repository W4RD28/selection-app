<script>
  import { Radio, P, ButtonGroup, Button, Img } from "flowbite-svelte"
</script>

<div class="mb-10">
  <Img size="max-w-md" src="https://cdn-academy.pressidium.com/academy/wp-content/uploads/2021/01/Right-triangle-with-side-lengths-of-5-in-and-12-in-768x385.png"/>
  <P class="mb-6">Panjang sisi c adalah</P>
  <Radio name="answer" value="a" class="mb-3">14 in</Radio>
  <Radio name="answer" value="b" class="mb-3">17 in</Radio>
  <Radio name="answer" value="c" class="mb-3">13 in</Radio>
  <Radio name="answer" value="d" class="mb-3">12 in</Radio>
  <ButtonGroup class="mt-6">
    <Button href="/exam/questions/1" color="light">Sebelumnya</Button>
    <Button href="/exam/questions/2" color="light">Selanjutnya</Button>
  </ButtonGroup>
  <Button class="mt-6 left-2" href="/exam/result" color="dark">Selesai</Button>
</div>