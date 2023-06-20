<script lang="ts">
  import { Heading, Input, Fileupload, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';

  let new_password: string
</script>


<svelte:head>
  <title>Ganti Password</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Ganti Password</Heading>
  <div class="mb-6">
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" required />
  </div>
  <div class="mb-6 w-1/2">
    <Label for="confirm_password" class="mb-2">Konfirmasi Password</Label>
    <Input type="password" id="confirm_password" required />
  </div>
  <Button type="submit" color="dark">Ganti Password</Button>
</form>