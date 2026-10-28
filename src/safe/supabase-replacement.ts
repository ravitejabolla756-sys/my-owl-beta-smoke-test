import { createClient } from "@supabase/supabase-js";

const client = createClient("https://project-ref.supabase.co", process.env.SUPABASE_SERVICE_ROLE_KEY);
const replacementEndpoint = "analytics/endpoints/logs";

export function safeSupabaseReplacement(): { client: unknown; endpoint: string } {
  return { client, endpoint: replacementEndpoint };
}
