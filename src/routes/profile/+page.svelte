<script lang="ts">
  import { Heading, Input, Fileupload, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';

  let loading = false
  let email: string
  let password: string  

  interface userProfile {
    id: string
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date
    nik: string
    kota: string
    kecamatan: string
    kelurahan: string
    course: string
  }

  const getUserId = async (): Promise<string> => {
    const { data: {user} } = await supabase.auth.getUser()
    if (user === undefined) {
      throw new Error()
    }

    return user?.id
  }

  const getProfile = async (): Promise<userProfile> => {
    const user_id = await getUserId()
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', user_id)

    return data
  }

  let { 
    id,
    first_name,
    last_name,
    phone_number,
    birth_date,
    nik,
    kota,
    kecamatan,
    kelurahan,
    course,
  } = getProfile()


  const upsertProfile = async () => {
    const user_id = await getUserId()
    const { data, error } = await supabase
      .from('users')
      .upsert({
        id: user_id,
        first_name,
        last_name,
        phone_number,
        birth_date,
        nik,
        kota,
        kecamatan,
        kelurahan,
        course,
      })
      .select()
    
    console.log(data)
  }

</script>

<svelte:head>
  <title>Profil</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Profil Anda</Heading>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">Nama Pertama</Label>
      <Input type="text" id="first_name" bind:value={first_name} required  />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Nama Terakhir</Label>
      <Input type="text" id="last_name" bind:value={last_name} required />
    </div>
    <div>
      <Label for="email" class="mb-2">Alamat Email</Label>
      <Input type="email" id="email" bind:value={email} required />
    </div>
    <div>
      <Label for="phone" class="mb-2">Nomor Telepon</Label>
      <Input type="tel" id="phone" pattern="[0-9]{'{'}8,15}" bind:value={phone_number} required />
    </div>
    <div>
      <Label for="birth_date" class="mb-2">Tanggal Lahir</Label>
      <Input type="date" id="birth_date" bind:date={birth_date} required />
    </div>
    <div>
      <Label for="nik" class="mb-2">Nomor Induk Kependudukan</Label>
      <Input type="text" id="nik" pattern="[0-9]{'{'}16}" bind:value={nik} required />
    </div>
    <div>
      <Label for="kota" class="mb-2">Kota/Kabupaten KTP</Label>
      <Input type="text" id="kota" bind:value={kota} required />
    </div>
    <div>
      <Label for="kecamatan" class="mb-2">Kecamatan</Label>
      <Input type="text" id="kecamatan" bind:value={kecamatan} required />
    </div>
    <div>
      <Label for="kelurahan" class="mb-2">Kelurahan/Desa</Label>
      <Input type="text" id="kelurahan" bind:value={kelurahan} required />
    </div>
  </div>
  <div class="mb-6"> 
    <Label for="course" class="mb-2">Pilih Bootcamp</Label>
    <select id="course" bind:value={course} required>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="mobile">Mobile</option>
    </select>
  </div>
  <!-- <div class="mb-6">
    <Label for="avatar" class="pb-2">Pas Foto</Label>
    <Fileupload id="avatar" class="mb-2" />
    <Helper>SVG, PNG, JPG atau GIF.</Helper>
  </div>
  <div class="mb-6">
    <Label for="ktp" class="pb-2">Kartu Tanda Penduduk</Label>
    <Fileupload id="ktp" class="mb-2" />
    <Helper>SVG, PNG, JPG atau GIF.</Helper>
  </div>
  <div class="mb-6">
    <Label for="ijazah" class="pb-2">Ijazah SMA/SMK/Diploma/Sarjana atau sederajat</Label>
    <Fileupload id="ijazah" class="mb-2" />
    <Helper>File harus berformat PDF.</Helper>
  </div>
  <div class="mb-6">
    <Label for="cv" class="pb-2">CV</Label>
    <Fileupload id="cv" class="mb-2" />
    <Helper>File harus berformat PDF.</Helper>
  </div> -->
  <div class="mb-6">
    <Button type="submit" color="light" on:click={upsertProfile}>Simpan</Button>
  </div>
</form>