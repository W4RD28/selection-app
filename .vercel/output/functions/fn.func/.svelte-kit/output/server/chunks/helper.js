import { s as supabase } from "./supabaseClient.js";
const getUserImageUrl = async (path) => {
  const { data } = await supabase.storage.from("avatar").getPublicUrl(path);
  return data.publicUrl;
};
const getUserKtp = async (path) => {
  const { data } = await supabase.storage.from("ktp").getPublicUrl(path);
  return data.publicUrl;
};
const getUserIjazah = async (path) => {
  const { data } = await supabase.storage.from("ijazah").getPublicUrl(path);
  return data.publicUrl;
};
const getUserCv = async (path) => {
  const { data } = await supabase.storage.from("cv").getPublicUrl(path);
  return data.publicUrl;
};
const getQuestionImage = async (path) => {
  const { data } = await supabase.storage.from("question").getPublicUrl(path);
  return data.publicUrl;
};
export {
  getQuestionImage as a,
  getUserKtp as b,
  getUserCv as c,
  getUserIjazah as d,
  getUserImageUrl as g
};
