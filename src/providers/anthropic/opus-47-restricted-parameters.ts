import Anthropic from "@anthropic-ai/sdk";

// Intended rule: anthropic-opus-4-7-parameter-restrictions
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export function restrictedOpus47ParametersExample(): Promise<unknown> {
  return client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 128,
    temperature: 0.4,
    top_p: 0.8,
    top_k: 40,
    messages: [{ role: "user", content: "inert compatibility fixture" }],
  });
}
