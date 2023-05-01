<script>
  import { Heading, Input, Fileupload, Label, Helper, Button, Img } from 'flowbite-svelte'
</script>

<svelte:head>
  <title>Akun</title>
</svelte:head>

<form>
  <Heading tag="h3" class="mb-6">Akun Anda</Heading>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">Nama Pertama</Label>
      <Input type="text" id="first_name" disabled value="Windu" />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Nama Terakhir</Label>
      <Input type="text" id="last_name" disabled value="Nursetyadi" />
    </div>
    <div>
      <Label for="email" class="mb-2">Alamat Email</Label>
      <Input type="email" id="email" disabled value="nursetyadiwindu@gmail.com" />
    </div>
    <div>
      <Label for="phone" class="mb-2">Nomor Telepon</Label>
      <Input type="tel" id="phone" pattern="[0-9]{15}" disabled value="08323121344" />
    </div>
    <div>
      <Label for="birth_date" class="mb-2">Tanggal Lahir</Label>
      <Input type="date" id="birth_date" disabled value="28/10/2001" />
    </div>
    <div>
      <Label for="nik" class="mb-2">Nomor Induk Kependudukan</Label>
      <Input type="text" id="nik" pattern="[0-9]{16}" disabled value="69121212" />
    </div>
  </div>
  <div class="mb-6">
    <Label for="alamat" class="mb-2">Alamat</Label>
    <Input type="text" id="alamat" disabled value="323121213" />
  </div>
  <Button href="/account/change-password" color="light">Ganti password</Button>
  <Button type="submit" color="dark">Simpan</Button>
</form>