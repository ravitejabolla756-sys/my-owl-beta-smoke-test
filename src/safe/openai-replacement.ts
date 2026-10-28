import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export function safeOpenAiReplacement(): Promise<unknown> {
  return client.responses.create({ model: "gpt-4.1", input: "inert compatibility fixture" });
}
