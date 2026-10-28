import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export function safeAnthropicReplacement(): Promise<unknown> {
  return client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 128,
    messages: [{ role: "user", content: "inert compatibility fixture" }],
  });
}
