import { supabase } from "$lib/supabaseClient";
import { redirect } from "@sveltejs/kit";

// redirect if there is no session
export async function load() {
  const { data, error } = await supabase.auth.getSession();
  if (data == null) {
    throw redirect(302, "/login")
  }
}

async function getUserId() {
  const { data: {user} } = await supabase.auth.getUser()
  const userId = user?.id

  return userId
}

async function getUserMetadata() {
  const { data: {user} } = await supabase.auth.getUser()
  const userMetadata = user?.user_metadata

  return userMetadata
}

// get user profile
async function getProfile() {
  const userId = getUserId()

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', userId)
    .single()

  return data
}

// create user profile
async function createProfile() {
  const userId = getUserId()

  const { data, error } = await supabase
    .from('profiles')
    .insert(
      { 
        id: userId,
        ...getUserMetadata()
      }
    )

  return data
}