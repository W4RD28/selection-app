<script lang="ts">
  import { Heading, Input, Label, Button, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import type { PageData } from './$types';

  export let data: PageData
  $: ({user, userData} = data)
  let email_baru: string

  const updateEmail = async () => {
    await supabase.auth
      .updateUser({
        email: email_baru,
        data: {
          email: email_baru
        }
      })
    await supabase.from("users")
      .update({
        email: email_baru
      })
      .eq("id", user.id)

    alert("Tolong cek inbox email baru Anda untuk menyelesaikan pergantian email")
    window.location.href = "/profile"
  }
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
  <div>
    <A href="/profile" class="mb-6">Kembali ke Profil</A>
  </div>
  <Button type="submit" color="dark" on:click={updateEmail}>Ganti Email</Button>
</form>



