import { createClient } from "@supabase/auth-helpers-sveltekit";
const PUBLIC_SUPABASE_URL = "https://ukfpiuvfphuxzfeymwrt.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZnBpdXZmcGh1eHpmZXltd3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxMDg4ODMsImV4cCI6MTk4OTY4NDg4M30.1dIm57RTtFv5s7s4IYOf4S8okdc1l_Q4pl8HrEzhYI8";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
export {
  supabase as s
};
