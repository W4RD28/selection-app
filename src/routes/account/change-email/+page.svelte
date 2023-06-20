<script lang="ts">
  import { Heading, Input, P, Avatar, Fileupload, Label, Helper, Button, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import type { PageData } from './$types';

  export let data: PageData
  $: ({user, userData} = data)
  let email_baru: string
</script>

<svelte:head>
  <title>Ganti Email</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Ganti Email</Heading>
  <div class="mb-6">
    <Label for="email_lama" class="mb-2">Email Lama</Label>
    <Input type="text" id="email_lama" disabled>{userData.email}</Input>
  </div>
  <div class="mb-6 w-1/2">
    <Label for="email_baru" class="mb-2">Email Baru</Label>
    <Input type="text" id="email_lama" bind:value={email_baru}/>
  </div>
  <Button type="submit" color="dark">Ganti Email</Button>
</form>



