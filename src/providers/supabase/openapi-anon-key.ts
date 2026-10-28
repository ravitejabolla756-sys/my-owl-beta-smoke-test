import { createClient } from "@supabase/supabase-js";

// Intended rule: supabase-openapi-anon-key-access-2026-03-11
const anonKeyClient = createClient("https://project-ref.supabase.co", process.env.SUPABASE_ANON_KEY);
const openApiRoot = "/rest/v1/";
const authOrHeader = "anon key";

export function openApiAnonKeyExample(): { client: unknown; endpoint: string; authOrHeader: string } {
  return { client: anonKeyClient, endpoint: openApiRoot, authOrHeader };
}
