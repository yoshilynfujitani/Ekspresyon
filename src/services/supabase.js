import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sfkiocpeiawcxdcslfaa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNma2lvY3BlaWF3Y3hkY3NsZmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1Mjg0MDUsImV4cCI6MjAwOTEwNDQwNX0.oFMfSRDBVW_wXYymA_Ifl1UZWkzVS5ajw_5QolvxM8M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
