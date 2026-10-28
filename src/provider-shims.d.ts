declare const process: {
  env: Record<string, string | undefined>;
};

declare module "openai" {
  export default class OpenAI {
    constructor(options: { apiKey?: string });
    chat: { completions: { create(input: unknown): Promise<unknown> } };
    beta: { assistants: { retrieve(id: string): Promise<unknown> } };
    responses: { create(input: unknown): Promise<unknown> };
  }
}

declare module "@anthropic-ai/sdk" {
  export default class Anthropic {
    constructor(options: { apiKey?: string });
    messages: { create(input: unknown): Promise<unknown> };
  }
}

declare module "@octokit/rest" {
  export class Octokit {
    constructor(options: { auth?: string });
    request(route: string, parameters?: Record<string, unknown>): Promise<{ data: Record<string, unknown> }>;
  }
}

declare module "@supabase/supabase-js" {
  export function createClient(url: string, key: string | undefined): { from(table: string): unknown };
}

declare module "twilio" {
  interface TwilioClient { }
  function twilio(accountSid?: string, authToken?: string): TwilioClient;
  export default twilio;
}
