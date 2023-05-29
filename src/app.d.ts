// src/app.d.ts
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Supabase {
    Database: import('./DatabaseDefinitions').Database
    SchemaName: 'public'
  }

  interface PageData {
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
    
  }

  interface Locals {
    supabase: SupabaseClient<Database>
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
  }
  // interface Error {}
  // interface Platform {}
}