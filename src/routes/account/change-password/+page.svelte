<script lang="ts">
  import { Heading, Input, Label, Button, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import { derived, writable } from 'svelte/store';

  let new_password = writable('')
  let confirm_password = writable("")

  const inputsMatch = derived([new_password, confirm_password], ([$value1, $value2]) => {
    if ($value1 == "" || $value2 == "") return false
    return $value1 === $value2
  })

  const changePassword = async () => {
    await supabase.auth
      .updateUser({
        password: $new_password
      })
    
    alert("Ganti password berhasil")
    window.location.href = "/profile"
  }
</script>


<svelte:head>
  <title>Ganti Password</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Ganti Password</Heading>
  <div class="mb-6 w-1/2">
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" bind:value={$new_password} id="password" required />
  </div>
  <div class="mb-6 w-1/2">
    <Label for="confirm_password" class="mb-2">Konfirmasi Password</Label>
    <Input type="password" bind:value={$confirm_password} id="confirm_password" required />
  </div>
  <div>
    <A href="/profile" class="mb-6">Kembali ke Profil</A>
  </div>
  <Button type="submit" color="dark" disabled={!$inputsMatch} on:click={changePassword}>Ganti Password</Button>
</form>