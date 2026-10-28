import twilio from "twilio";

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const replacementDomain = "api.twilio.com";
const replacementEndpoint = "/Executions";

export function safeTwilioReplacement(): { client: unknown; domain: string; endpoint: string } {
  return { client, domain: replacementDomain, endpoint: replacementEndpoint };
}
