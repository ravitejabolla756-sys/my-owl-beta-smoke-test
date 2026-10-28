import Anthropic from "@anthropic-ai/sdk";

// Intended rule: anthropic-claude-opus-4-1-retirement-2026-08-05
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export function retiredOpus41Example(): Promise<unknown> {
  return client.messages.create({
    model: "claude-opus-4-1-20250805",
    max_tokens: 128,
    messages: [{ role: "user", content: "inert compatibility fixture" }],
  });
}
