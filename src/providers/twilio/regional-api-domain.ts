import twilio from "twilio";

// Intended rule: twilio-regional-api-domain-removal-2026-04-28
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const deprecatedRegionalDomains = [
  "api.ie1.twilio.com",
  "api.au1.twilio.com",
  "api.br1.twilio.com",
  "api.de1.twilio.com",
  "api.jp1.twilio.com",
  "api.sg1.twilio.com",
  "api.us2.twilio.com",
];

export function regionalDomainExample(): { client: unknown; domains: string[] } {
  return { client, domains: deprecatedRegionalDomains };
}
