<script lang="ts">
  import { Heading, P } from "flowbite-svelte";
  import { supabase } from "$lib/supabaseClient"
  import type { PageData } from "./$types"
  import { onMount } from "svelte";

  export let data: PageData
  $: ({examResult} = data)
</script>

<Heading tag="h2" class="mb-6 mt-16">Selamat!</Heading>
<P class="mb-6">Nilai Ujian Tertulis Anda {examResult}</P>
<P class="mb-20">Mohon tunggu pengumuman selanjutnya!</P>