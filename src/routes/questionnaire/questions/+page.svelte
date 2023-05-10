<script lang="ts">
  import { Heading, Input, Textarea, Label, Button, Checkbox, A, Radio } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import { error, redirect } from '@sveltejs/kit';

  const getUserId = async (): Promise<string> => {
    const { data: {user} } = await supabase.auth.getUser()
    if (user === undefined) {
      throw new Error()
    }
    return user_id = user?.id
  }

  let loading = false
  let user_id: string = getUserId()
  let category: string
  let disability: string
  let disability_type: string
  let pendapatan: string
  let alasan: string
  let harapan: string
  let akses_laptop: string

  const handleSubmit = async () => {
    try {
      loading = true
      let data = {
        user_id,
        category,
        disability,
        disability_type,
        pendapatan,
        alasan,
        harapan,
        akses_laptop,
      }

      console.log(data)
      const { error } = await supabase
        .from('questionnaire')
        .insert(data)
        .select()
      
      console.log(data, error)
    }
    catch (error) {
      alert("Jawaban Anda belum sesuai")
    }
    finally {
      loading = false
      window.location.href = "/questionnaire/thanks"
    }
  }
</script>


<svelte:head>
  <title>Kuesioner</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Kuesioner Bootcamp</Heading>
  <Label class="mb-6" for="category">Apakah Anda termasuk dalam kategori berikut?</Label>
  <div class="mb-6">
    <Radio class="mb-3" name="category" value="Yatim" bind:group={category} required>Yatim</Radio>
    <Radio class="mb-3" name="category" value="Yatim piatu" bind:group={category} required>Piatu</Radio>
    <Radio class="mb-3" name="category" value="Bukan keduanya" bind:group={category} required>Bukan keduanya</Radio>
  </div>
  <Label class="mb-6" for="disability">Apakah Anda termasuk penyandang disabilitas?</Label>
  <div class="mb-6">
    <Radio class="mb-3" name="disability" value="Ya" bind:group={disability} required>Ya</Radio>
    <Radio class="mb-3" name="disability" value="Tidak" bind:group={disability} required>Tidak</Radio>
  </div>
  <Label class="mb-6" for="disability_type">Jika ya, jenis disabilitas</Label>
  <Textarea class="mb-6" id="disability_type" bind:value={disability_type}></Textarea>
  <Label class="mb-6" for="pendapatan">Pendapatan per bulan</Label>
  <div class="mb-6">
    <Radio class="mb-3" name="pendapatan" value="Kurang dari 1 juta" bind:group={pendapatan} required>Kurang dari 1 juta</Radio>
    <Radio class="mb-3" name="pendapatan" value="1 juta - 2 juta" bind:group={pendapatan} required>1 juta - 2 juta</Radio>
    <Radio class="mb-3" name="pendapatan" value="2 juta - 3 juta" bind:group={pendapatan} required>2 juta - 3 juta</Radio>
    <Radio class="mb-3" name="pendapatan" value="3 juta - 4 juta" bind:group={pendapatan} required>3 juta - 4 juta</Radio>
    <Radio class="mb-3" name="pendapatan" value="4 juta - 5 juta" bind:group={pendapatan} required>4 juta - 5 juta</Radio>
    <Radio class="mb-3" name="pendapatan" value="Lebih dari 5 juta" bind:group={pendapatan} required>Lebih dari 5 juta</Radio>
  </div>
  <Label class="mb-6" for="alasan">Alasan mengikuti bootcamp</Label>
  <Textarea class="mb-6" id="alasan" bind:value={alasan} required></Textarea>
  <Label class="mb-6" for="harapan">Harapan setelah mengikuti bootcamp</Label>
  <Textarea class="mb-6" id="harapan" bind:value={harapan} required></Textarea>
  <Label class="mb-6" for="akses laptop">Apakah Anda dapat mengakses laptop/komputer selama pelatihan?</Label>
  <div class="mb-6">
    <Radio class="mb-3" name="akses_laptop" id="akses_laptop" value="ya" bind:group={akses_laptop} required>Ya</Radio>
    <Radio class="mb-3" name="akses_laptop" id="akses_laptop" value="tidak" bind:group={akses_laptop} required>Tidak</Radio>
  </div>
  <Checkbox class="mb-6 space-x-1" required>Saya dapat mengikuti seluruh kegiatan bootcamp.
    </Checkbox>
  <Checkbox class="mb-6 space-x-1" required>Saya telah menjawab kuesioner ini dengan jujur.
    </Checkbox>
  <Button type="submit" color="dark" on:click={handleSubmit}>Submit</Button>
</form>