<script lang="ts">
  import { Heading, Input, Fileupload, Label, Button, Checkbox, A, Select } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import { createEventDispatcher } from 'svelte';
  import { generateString } from '$lib/helper';

  let loading = false
  let email: string
  let password: string
  let confirm_password: string

  let first_name: string
  let last_name: string
  let phone_number: string
  let birth_date: string
  let nik: string
  let kota: string
  let kecamatan: string
  let kelurahan: string
  let course: string

  let files: FileList
  let uploading: boolean = false

  let avatar_url: string
  let avatar_uploading: boolean = false

  let ktp_url: string
  let ktp_uploading: boolean = false

  let ijazah_url: string
  let ijazah_file: File
  let cv_url: string
  let cv_file: File

  let bootcampCourses = [
    {value: "karyawan", name:"Karyawan"},
    {value: "pebisnis", name:"Pebisnis"},
    {value: "profesional", name:"Profesional"}
  ]

  const dispatch = createEventDispatcher()

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

  $: formIsEmpty = !first_name || !last_name || !email || !phone_number || 
    !birth_date || !nik || !kota || !kecamatan || !kelurahan || !course || !password || !confirm_password;
  $: passwordMatch = password == confirm_password;
  $: consent = false;
  $: filesAreEmpty = files == undefined;

  const handlePasswordInput = (event) => {
    password = event.target.value
  }
  const handleConfirmPasswordInput = (event) => {
    confirm_password = event.target.value
  }

  const handleRegister = async() => {
    try {
      loading = true
      let { data: {user}, error } = await supabase.auth.signUp({ 
        email, 
        password,
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
            avatar_url,
            ktp_url,
            ijazah_url,
            cv_url,
            role: 'user'
          }
        }
      })
      console.log(user)

      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
        return
      }
    } 

    alert("Registrasi berhasil, silahkan cek email anda untuk verifikasi akun")
    loading = false
    window.location.href = "/"
  }

  const handleAvatarImageUpload = async () => {
    try {
      uploading = true

      const fileExt = files[0].name.split('.').pop();

      const url = `${generateString()}.${fileExt}`

      const { data, error } = await supabase.storage.from('avatar').upload(`public/${url}`, files[0])
      if (error) {
        alert(error.message)
      } else {
        alert('Upload complete')
      }

      dispatch('upload')
      avatar_url = data?.path
    }
    catch (error){
      if (error instanceof Error) {
        alert(error.message)
      }
    }
    finally {
      uploading = false
    }
  }

  const handleKtpImageUpload = async () => {
    try{ 
      uploading = true

      const fileExt = files[0].name.split('.').pop();

      const url = `${generateString()}.${fileExt}`

      const { data, error } = await supabase.storage.from('ktp').upload(`public/${url}`, files[0])
      if (error) {
        alert(error.message)
      } else {
        alert('Upload complete')
      }

      dispatch('upload')
      ktp_url = data?.path
    }
    catch (error){
      if (error instanceof Error) {
        alert(error.message)
      }
    }
    finally {
      uploading = false
    }
  }

  const handleCvUpload = async () => {
    try{ 
      uploading = true

      const fileExt = files[0].name.split('.').pop();

      const url = `${generateString()}.${fileExt}`

      const { data, error } = await supabase.storage.from('cv').upload(`public/${url}`, files[0])
      if (error) {
        alert(error.message)
      } else {
        alert('Upload complete')
      }

      dispatch('upload')
      cv_url = data?.path
    }
    catch (error){
      if (error instanceof Error) {
        alert(error.message)
      }
    }
    finally {
      uploading = false
    }
  }

  const handleIjazahUpload = async () => {
    try{ 
      uploading = true

      const fileExt = files[0].name.split('.').pop();

      const url = `${generateString()}.${fileExt}`

      const { data, error } = await supabase.storage.from('ijazah').upload(`public/${url}`, files[0])
      if (error) {
        alert(error.message)
      } else {
        alert('Upload complete')
      }

      dispatch('upload')
      ijazah_url = data?.path
    }
    catch (error){
      if (error instanceof Error) {
        alert(error.message)
      }
    }
    finally {
      uploading = false
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
      <Label for="first_name" class="mb-2">Nama Awal</Label>
      <Input type="text" id="first_name" bind:value={first_name} required  />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Nama Akhir</Label>
      <Input type="text" id="last_name" bind:value={last_name} required />
    </div>
    <div>
      <Label for="email" class="mb-2">Alamat Email</Label>
      <Input type="email" id="email" bind:value={email} required />
    </div>
    <div>
      <Label for="phone_number" class="mb-2">Nomor Telepon</Label>
      <Input type="tel" id="phone_number" pattern="[0-9]{'{'}8,15}" bind:value={phone_number} required />
    </div>
    <div>
      <Label for="birth_date" class="mb-2">Tanggal Lahir</Label>
      <Input type="date" id="birth_date" bind:value={birth_date} required />
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
  <div class="mb-6 w-1/2"> 
    <Label for="course" class="mb-2 w-full">Kursus Bootcamp (TIDAK BISA DIPILIH ULANG)
      <Select bind:value={course} items={bootcampCourses}></Select>
    </Label>
  </div>
  <div class="mb-6">
    <Label  class="pb-2">Pas Foto (SVG, PNG, JPG atau GIF)</Label>
    <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
      <Fileupload class="mb-2" bind:files disabled={uploading}/>
      <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleAvatarImageUpload}>Upload</Button>
    </div>
  </div>
  <div class="mb-6">
    <Label for="ktp" class="pb-2">Kartu Tanda Penduduk (SVG, PNG, JPG atau GIF)</Label>
    <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
      <Fileupload id="ktp" class="mb-2" bind:files disable={uploading}/>
      <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleKtpImageUpload}>Upload</Button>
    </div>
  </div>
  <div class="mb-6">
    <Label for="ijazah" class="pb-2">Ijazah SMA/SMK/Diploma/Sarjana atau sederajat (PDF)</Label>
    <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
    <Fileupload id="ijazah" class="mb-2" bind:files disable={uploading}/>
    <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleIjazahUpload}>Upload</Button>
  </div>
  </div>
  <div class="mb-6">
    <Label for="cv" class="pb-2">CV (PDF)</Label>
    <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
    <Fileupload id="cv" class="mb-2" bind:files disable={uploading}/>
    <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleCvUpload}>Upload</Button>
    </div>
  </div>
  <div class="mb-6" >
    <Label for="password" class="mb-2">Password</Label>
    <Input class="w-1/2" name="password" type="password" id="password" bind:value={password} on:input={handlePasswordInput} required />
  </div>
  <div class="mb-6">
    <Label for="confirm_password" class="mb-2">Konfirmasi Password</Label>
    <Input class="w-1/2" name="confirm_password" type="password" id="confirm_password" bind:value={confirm_password} on:input={handleConfirmPasswordInput} required />
  </div>
  <Checkbox class="mb-6 space-x-1" bind:checked={consent}>Semua data yang saya isikan dan tercantum dalam biodata ini adalah benar dan dapat dipertanggungjawabkan secara hukum.
    </Checkbox>
  <Button type="submit" color="dark" disabled={formIsEmpty || !passwordMatch || !consent || filesAreEmpty} on:click={handleRegister} >Register</Button>
  <div class="mb-6 pt-5">
    <A href="/login">Sudah miliki akun? </A>
  </div>
</form>