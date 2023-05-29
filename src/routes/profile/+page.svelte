<script lang="ts">
  import { Heading, Input, Img, Avatar, Fileupload, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte'
  import { supabase } from '$lib/supabaseClient';
  import type { PageData } from './$types';
  import { getUserImageUrl, getUserKtp, getUserIjazah, getUserCv, generateString } from '$lib/helper';

  export let data: PageData
  $: ({ session, user, userData } = data)
  let loading = false

  const updateProfile = async () => {
    await supabase
      .auth
      .updateUser({ 
        data: { 
          email: userData.email, 
          data: userData 
        } 
      })
    const { data, error } = await supabase
      .from('users')
      .update(
        userData
      )
      .eq('id', session?.user.id)
      .select()
  }

</script>

<svelte:head>
  <title>Profil</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6" >Profil Anda</Heading>
  <div class="mb-6">
    {#await getUserImageUrl(userData.avatar_url)}
      <Avatar alt="user image" size="xl" />
    {:then avatarUrl} 
      <Avatar alt="user image" src={avatarUrl} size="xl" />
    {/await}
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
      <Input type="email" id="email" bind:value={user.email} required />
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
    <Label for="course" class="mb-2">Pilih Bootcamp</Label>
    <select id="course" bind:value={userData.course} required>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="mobile">Mobile</option>
    </select>
  </div>
  <!--Show User Other Documents-->
  <div class="mb-6">
    <Label for="ktp" class="pb-2">Kartu Tanda Penduduk</Label>
    {#await getUserKtp(userData.ktp_url)}
      <Fileupload id="ktp" class="mb-2" />
    {:then ktpUrl} 
      <Fileupload id="ktp" class="mb-2" src={ktpUrl} />
      <Button type="button" color="light" on:click={() => window.open(ktpUrl)}>Lihat</Button>
    {/await}
    <Helper>SVG, PNG, JPG atau GIF.</Helper>
  </div>
  <div class="mb-6">  
    <Label for="cv" class="pb-2">Curriculum Vitae</Label>
    {#await getUserCv(userData.cv_url)}
      <Fileupload id="cv" class="mb-2" />
    {:then cvUrl} 
      <Fileupload id="cv" class="mb-2" src={cvUrl} />
      <Button type="button" color="light" on:click={() => window.open(cvUrl)}>Lihat</Button>
    {/await}
  </div>
  <div class="mb-6">
    <Label for="ijazah" class="pb-2">Ijazah</Label>
    {#await getUserIjazah(userData.ijazah_url)}
      <Fileupload id="ijazah" class="mb-2" />
    {:then ijazahUrl}
    <Fileupload id="ijazah" class="mb-2" src={ijazahUrl} />
    <Button type="button" color="light" on:click={() => window.open(ijazahUrl)}>Lihat</Button>
    {/await}
  </div>
  <div class="mb-6">
    <Button type="submit" color="light" on:click={updateProfile}>Simpan</Button>
  </div>
</form>