<script>
  import { Input, Label, Button, Checkbox, A, Card } from 'flowbite-svelte'
</script>

<div class="">
  <Card size="sm">
    <h3 class="text-xl font-medium">Login</h3>
    <form class="p-10">
      <div class="mb-6">
        <Label for="email" class="mb-2">Alamat Email</Label>
        <Input type="email" id="email" required />
      </div>
      <div class="mb-6">
        <Label for="password" class="mb-2">Password</Label>
        <Input type="password" id="password" required />
      </div>
      <div class="mb-6">
        <Checkbox id="remember" >Ingat saya</Checkbox>
      </div>
      <Button type="submit" color="light">Login</Button>
      <div class="pt-5">
        <A href="/register">Belum miliki akun? </A>
      </div>
    </form>
  </Card>
</div>

