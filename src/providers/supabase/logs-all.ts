import { createClient } from "@supabase/supabase-js";

// Intended rule: supabase-management-logs-all-removal-2026-09-23
const client = createClient("https://project-ref.supabase.co", process.env.SUPABASE_SERVICE_ROLE_KEY);
const managementEndpoint = "analytics/endpoints/logs.all";

export function removedLogsAllExample(): { client: unknown; endpoint: string } {
  return { client, endpoint: managementEndpoint };
}
