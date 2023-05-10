<script lang="ts">
  import { Heading, Input, Fileupload, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import { redirect } from '@sveltejs/kit';

  let loading = false
  let email: string
  let password: string
  let confirm_password: string

  let first_name: string
  let last_name: string
  let phone_number: string
  let birth_date: Date
  let nik: string
  let kota: string
  let kecamatan: string
  let kelurahan: string
  let course: string

  const confirmPassword = () => {

    if (password === null || confirm_password === null) return false
    if (password !== confirm_password) return false
  }
  const getUserId = async (): Promise<string> => {
    const { data: {user} } = await supabase.auth.getUser()
    if (user === undefined) {
      throw new Error()
    }
    return user_id = user?.id
  }

  const handleRegister = async() => {
    try {
      loading = true
      let { data: {user}, error } = await supabase.auth.signUp({ 
        email, 
        password,
        phone: phone_number,
        options: {
          data: {
            first_name,
            last_name,
            phone_number,
            birth_date,
            nik,
            kota,
            kecamatan,
            kelurahan,
            course,
          }
        }
      })
      if (error) throw error

      const { data } = await supabase
        .from('users')
        .insert(
          { 
            id: user?.id,
            first_name,
            last_name,
            phone_number,
            birth_date,
            nik,
            kota,
            kecamatan,
            kelurahan,
            course,
          }
        )
        .select()
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      alert("Registrasi berhasil, silahkan cek email anda untuk verifikasi akun")
      loading = false
      window.location.href = "/"
    }
  }

  const handleFileImageUpload = async (event: any) => {
    const file = event.target.files[0]
    const { data, error } = await supabase.storage.from('image').upload(`public/${file.name}`, file)
    if (error) {
      alert(error.message)
    } else {
      alert('Upload complete')
    }
    return data
  }

  const handlePdfUpload = async (event: any) => {
    const file = event.target.files[0]
    const { data, error } = await supabase.storage.from('pdf').upload(`public/${file.name}`, file)
    if (error) {
      alert(error.message)
    } else {
      alert('Upload complete')
    }
  }
</script>


<svelte:head>
  <title>Register</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Daftar Bootcamp</Heading>
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
  <div class="mb-6">
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
  </div>
  <div class="mb-6" >
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" bind:value={password} required />
  </div>
  <div class="mb-6">
    <Label for="confirm_password" class="mb-2">Konfirmasi Password</Label>
    <Input type="password" id="confirm_password" bind:value={confirm_password} required />
  </div>
  <Checkbox class="mb-6 space-x-1" required>Semua data yang saya isikan dan tercantum dalam biodata ini adalah benar dan dapat dipertanggungjawabkan secara hukum.
    </Checkbox>
  <Button type="submit" color="dark" on:click={handleRegister} >Register</Button>
  <div class="mb-6 pt-5">
    <A href="/login">Sudah miliki akun? </A>
  </div>
</form>