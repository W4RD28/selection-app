<script lang="ts">
  import { Heading, Input, P, Avatar, Fileupload, Label, Helper, Button, A, Select } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import type { PageData } from './$types';
  import { getUserImageUrl, getUserKtp, getUserIjazah, getUserCv, generateString } from '$lib/helper';
  import { createEventDispatcher } from 'svelte';
  import { invalidateAll } from '$app/navigation';

  export let data: PageData
  $: ({ session, user, userData } = data)

  let files: FileList
  let uploading = false
  let bootcampCourses = [
    {value: "karyawan", name:"Karyawan"},
    {value: "pebisnis", name:"Pebisnis"},
    {value: "profesional", name:"Profesional"}
  ]

  const dispatch = createEventDispatcher()

  const updateProfile = async () => {
    await supabase
      .auth
      .updateUser({ 
        data: { 
          email: userData.email, 
          data: {
            first_name: userData.first_name,
            last_name: userData.last_name,
            phone_number: userData.phone_number,
            birth_date: userData.birth_date,
            nik: userData.nik,
            kota: userData.kota,
            kecamatan: userData.kecamatan,
            kelurahan: userData.kelurahan,
            course: userData.course,
            avatar_url: userData.avatar_url,
            ktp_url: userData.ktp_url,
            cv_url: userData.cv_url,
            ijazah_url: userData.ijazah_url,
          }
        } 
      })
    const { data, error } = await supabase
      .from('users')
      .update(
        userData
      )
      .eq('id', session?.user.id)
      .select()

    invalidateAll()
    alert('Profil berhasil diperbarui')
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
      userData.avatar_url = data?.path
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
      userData.ktp_url = data?.path
      dispatch('upload')
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
      userData.cv_url = data?.path
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
      userData.ijazah_url = data?.path
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
  <title>Profil</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Profil Anda</Heading>
  <div class="flex items-start mb-6">
    <div class="w-1/6">
      {#await getUserImageUrl(userData.avatar_url)}
      <Avatar size="xl" border={true} class="1/2"/>
      {:then avatarUrl} 
      {#if avatarUrl == null}
      <Avatar size="xl" border={true} class="1/2">{userData.first_name[0] + userData.last_name[0]}</Avatar>
      {:else}
      <Avatar src={avatarUrl} size="xl" border={true} class="1/2"/>
      {/if}
    {/await}
    </div>
    <div class="mb-6 mt-6">
      <Label class="pb-2">Pas Foto (SVG, PNG, JPG atau GIF)</Label>
      <div class="grid gap-2 mb-6 md:grid-cols-2">
        <Fileupload class="mb-2" bind:files disabled={uploading}/>
        <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleAvatarImageUpload}>Upload</Button>
      </div>
    </div>
  </div>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">Nama Pertama</Label>
      <Input type="text" id="first_name" bind:value={userData.first_name} required  />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Nama Terakhir</Label>
      <Input type="text" id="last_name" bind:value={userData.last_name} required />
    </div>
    <div>
      <Label for="email" class="mb-2">Alamat Email</Label>
      <Input type="email" id="email" disabled bind:value={user.email} required />
    </div>
    <div>
      <Label for="phone" class="mb-2">Nomor Telepon</Label>
      <Input type="tel" id="phone" pattern="[0-9]{'{'}8,15}" bind:value={userData.phone_number} required />
    </div>
    <div>
      <Label for="birth_date" class="mb-2">Tanggal Lahir</Label>
      <Input type="date" id="birth_date" bind:value={userData.birth_date} required />
    </div>
    <div>
      <Label for="nik" class="mb-2">Nomor Induk Kependudukan</Label>
      <Input type="text" id="nik" pattern="[0-9]{'{'}16}" bind:value={userData.nik} required />
    </div>
    <div>
      <Label for="kota" class="mb-2">Kota/Kabupaten KTP</Label>
      <Input type="text" id="kota" bind:value={userData.kota} required />
    </div>
    <div>
      <Label for="kecamatan" class="mb-2">Kecamatan</Label>
      <Input type="text" id="kecamatan" bind:value={userData.kecamatan} required />
    </div>
    <div>
      <Label for="kelurahan" class="mb-2">Kelurahan/Desa</Label>
      <Input type="text" id="kelurahan" bind:value={userData.kelurahan} required />
    </div>
  </div>
  <div class="mb-6"> 
    <Label for="course" class="mb-2 w-1/2">Kursus Bootcamp
      <Select bind:value={userData.course} items={bootcampCourses} disabled></Select>
    </Label>
  </div>
  <!--Show User Other Documents-->
  <div class="mb-6">
    <Label for="ktp" class="pb-2">Kartu Tanda Penduduk</Label>
    {#await getUserKtp(userData.ktp_url)}
      <Fileupload id="ktp" class="mb-2" />
    {:then ktpUrl} 
      <Button class="mb-3 w-32" type="button" color="light" on:click={() => window.open(ktpUrl)}>Lihat</Button>
      <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
        <Fileupload id="ktp" class="mb-2" bind:files disable={uploading}/>
        <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleKtpImageUpload}>Upload</Button>
      </div>
    {/await}
    <Helper>SVG, PNG, JPG atau GIF.</Helper>
  </div>
  <div class="mb-6">  
    <Label for="cv" class="pb-2">Curriculum Vitae</Label>
    {#await getUserCv(userData.cv_url)}
      <Fileupload id="cv" class="mb-2" />
    {:then cvUrl} 
      <Button class="mb-3 w-32" type="button" color="light" on:click={() => window.open(cvUrl)}>Lihat</Button>
      <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
        <Fileupload id="cv" class="mb-2" bind:files disable={uploading}/>
        <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleCvUpload}>Upload</Button>
      </div>
    {/await}
  </div>
  <div class="mb-6">
    <Label for="ijazah" class="pb-2">Ijazah</Label>
    {#await getUserIjazah(userData.ijazah_url)}
      <Fileupload id="ijazah" class="mb-2" />
    {:then ijazahUrl}
    <Button class="mb-3 w-32" type="button" color="light" on:click={() => window.open(ijazahUrl)}>Lihat</Button>
    <div class="grid gap-2 mb-6 md:grid-cols-2 w-4/5">
      <Fileupload id="ijazah" class="mb-2" bind:files disable={uploading}/>
      <Button color="light" class="w-1/4 h-4/5" disabled={uploading} on:click={handleIjazahUpload}>Upload</Button>
    </div>
    {/await}
  </div>
  <div class="mb-6">
    <A href="account/change-password"><P color="blue">Ganti Password</P></A>
  </div>
  <div class="mb-6">
    <A href="account/change-email"><P color="blue">Ganti Email</P></A>
  </div>
  <div class="mb-6">
    <Button type="submit" color="primary" on:click={updateProfile}>Simpan</Button>
    <Button type="return" color="light" href="/">Kembali</Button> 
  </div>
</form>