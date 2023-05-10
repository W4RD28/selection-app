<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { redirect } from '@sveltejs/kit';
  import { Input, Label, Button, Checkbox, A, Card } from 'flowbite-svelte'

  let loading = false
  let email: string
  let password: string

  const handleLogin = async() => {
    try {
      loading = true
      const { error } = await supabase.auth.signInWithPassword({ 
        email, 
        password,
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
      window.location.href = '/dashboard'
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="">
  <Card size="sm">
    <h3 class="text-xl font-medium">Login</h3>
    <form class="p-10">
      <div class="mb-6">
        <Label for="email" class="mb-2">Alamat Email</Label>
        <Input type="email" id="email" bind:value={email} required />
      </div>
      <div class="mb-6">
        <Label for="password" class="mb-2">Password</Label>
        <Input type="password" id="password" bind:value={password} required />
      </div>
      <div class="mb-6">
        <Checkbox id="remember" >Ingat saya</Checkbox>
      </div>
      <Button type="submit" color="light" on:click={handleLogin}>Login</Button>
      <div class="pt-5">
        <A href="/register">Belum miliki akun? </A>
      </div>
    </form>
  </Card>
</div>

