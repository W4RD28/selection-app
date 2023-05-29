import { supabase } from "$lib/supabaseClient";

export function generateString(length: number = 8) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const getUserImageUrl = async (path: string) => {
  const { data } = await supabase.storage.from("avatar").getPublicUrl(path);
  return data.publicUrl;
}

export const getUserKtp = async (path: string) => {
  const { data } = await supabase.storage.from("ktp").getPublicUrl(path);
  return data.publicUrl;
}

export const getUserIjazah = async (path: string) => {
  const { data } = await supabase.storage.from("ijazah").getPublicUrl(path);
  return data.publicUrl;
}

export const getUserCv = async (path: string) => {
  const { data } = await supabase.storage.from("cv").getPublicUrl(path);
  return data.publicUrl;
}

export const getQuestionImage = async (path: string) => {
  const { data } = await supabase.storage.from("question").getPublicUrl(path);
  return data.publicUrl;
}