<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { redirect } from '@sveltejs/kit';
  import { Input, Label, Button, Checkbox, A, Card, Heading, Img } from 'flowbite-svelte'

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

<!--Side-by side Login Card with an Image-->
<div class="">
  <Card size="sm">
    <Heading tag="h3" class="text-xl font-medium">Login</Heading>
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
      <Button type="submit" color="primary" on:click={handleLogin}>Login</Button>
      <div class="pt-5">
        <A href="/register">Belum miliki akun? </A>
      </div>
    </form>
  </Card>
  <Img src="https://images.unsplash.com/photo-1612837017391-5e9b1b0d0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb3Vyc2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="course" class="w-full h-32 object-cover rounded-t-lg"/>
</div>

