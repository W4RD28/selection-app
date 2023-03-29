<script>
  import { Heading, Input, Fileupload, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte'
</script>


<form>
  <Heading tag="h3" class="mb-6" >Daftar Bootcamp</Heading>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label for="first_name" class="mb-2">Nama Pertama</Label>
      <Input type="text" id="first_name" required  />
    </div>
    <div>
      <Label for="last_name" class="mb-2">Nama Terakhir</Label>
      <Input type="text" id="last_name" required />
    </div>
    <div>
      <Label for="email" class="mb-2">Alamat Email</Label>
      <Input type="email" id="email" required />
    </div>
    <div>
      <Label for="phone" class="mb-2">Nomor Telepon</Label>
      <Input type="tel" id="phone" pattern="[0-9]{15}" required />
    </div>
    <div>
      <Label for="birth_date" class="mb-2">Tanggal Lahir</Label>
      <Input type="date" id="birth_date" required />
    </div>
    <div>
      <Label for="nik" class="mb-2">Nomor Induk Kependudukan</Label>
      <Input type="text" id="nik" pattern="[0-9]{16}" required />
    </div>
  </div>
  <div class="mb-6">
    <Label for="alamat" class="mb-2">Alamat</Label>
    <Input type="text" id="alamat" required />
  </div>
  <div class="mb-6">
    <Label for="with_helper" class="pb-2">Kartu Tanda Penduduk</Label>
    <Fileupload id="with_helper" class="mb-2" />
    <Helper>SVG, PNG, JPG atau GIF.</Helper>
  </div>
  <div class="mb-6">
    <Label for="with_helper" class="pb-2">CV</Label>
    <Fileupload id="with_helper" class="mb-2" />
    <Helper>File harus berformat PDF.</Helper>
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" required />
  </div>
  <div class="mb-6">
    <Label for="confirm_password" class="mb-2">Konfirmasi Password</Label>
    <Input type="password" id="confirm_password" required />
  </div>
  <Checkbox class="mb-6 space-x-1" required>Saya setuju dengan syarat dan ketentuan.</Checkbox>
  <Button type="submit" color="dark">Register</Button>
  <div class="mb-6 pt-5">
    <A href="/login">Sudah miliki akun? </A>
  </div>
</form>