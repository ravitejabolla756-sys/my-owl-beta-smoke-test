import twilio from "twilio";

// Intended rule: twilio-studio-engagements-endpoint-deprecated
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const deprecatedStudioEndpoint = "/Engagements";

export function studioEngagementsExample(): { client: unknown; endpoint: string } {
  return { client, endpoint: deprecatedStudioEndpoint };
}
