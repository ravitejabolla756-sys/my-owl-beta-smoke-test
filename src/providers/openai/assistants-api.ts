import OpenAI from "openai";

// Intended rule: openai-assistants-api-sunset-2026-08-26
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export function deprecatedAssistantsApiExample(): Promise<unknown> {
  return client.beta.assistants.retrieve("fixture-assistant-id");
}
