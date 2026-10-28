import OpenAI from "openai";

// Intended rule: openai-gpt-4-5-preview-removal-2025-07-14
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export function deprecatedGpt45PreviewExample(): Promise<unknown> {
  return client.chat.completions.create({
    model: "gpt-4.5-preview",
    messages: [{ role: "user", content: "inert compatibility fixture" }],
  });
}
