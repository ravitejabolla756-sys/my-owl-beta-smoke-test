import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const manifestPath = join(root, "fixture-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const expectedProviders = new Set(["openai", "anthropic", "github", "supabase", "twilio"]);
const ruleIds = manifest.rules.map((rule) => rule.ruleId);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(manifest.providerCount === expectedProviders.size, "providerCount must equal five");
assert(manifest.ruleCount === 10, "ruleCount must equal ten");
assert(new Set(manifest.providers).size === expectedProviders.size, "provider IDs must be unique");
assert(manifest.providers.every((provider) => expectedProviders.has(provider)), "unexpected provider ID");
assert(new Set(ruleIds).size === 10, "all ten rule IDs must be unique");
assert(manifest.rules.every((rule) => expectedProviders.has(rule.providerId)), "rule references an unexpected provider");
assert(Object.keys(manifest.safeReplacementFixtures).length === expectedProviders.size, "one safe replacement fixture is required per provider");
assert(new Set(Object.values(manifest.safeReplacementFixtures)).size === expectedProviders.size, "safe replacement fixture paths must be unique per provider");

const positiveFixturePaths = [];
const safeFixturePaths = Object.values(manifest.safeReplacementFixtures);
for (const rule of manifest.rules) {
  const positivePath = rule.positiveFixture;
  const safePath = rule.safeReplacementFixture;
  assert(typeof positivePath === "string", `positiveFixture missing for ${rule.ruleId}`);
  assert(typeof safePath === "string", `safeReplacementFixture missing for ${rule.ruleId}`);
  assert(safePath === manifest.safeReplacementFixtures[rule.providerId], `safe replacement does not match provider for ${rule.ruleId}`);
  for (const path of [positivePath, safePath]) {
    assert(!path.includes(".."), `path escapes repository: ${path}`);
    assert(existsSync(join(root, path)), `manifest file missing: ${path}`);
  }
  positiveFixturePaths.push(positivePath);
}
assert(new Set(positiveFixturePaths).size === positiveFixturePaths.length, "duplicate positive fixture paths exist");

const sourceFiles = [...new Set([...positiveFixturePaths, ...safeFixturePaths])];
const literalSecret = /\b(?:api[_-]?key|auth[_-]?token|access[_-]?token|secret|password|private[_-]?key)\s*[:=]\s*["'`][^"'`]+["'`]/i;
const networkCall = /\b(?:fetch|axios\.(?:get|post|request)|https?\.request|XMLHttpRequest)\s*\(/;

for (const path of sourceFiles) {
  const content = await readFile(join(root, path), "utf8");
  assert(!literalSecret.test(content), `literal secret-like value found in ${path}`);
  assert(!networkCall.test(content), `network request found in ${path}`);
}

console.log(`Verified ${manifest.providerCount} providers, ${manifest.ruleCount} rules, ${sourceFiles.length} unique fixture paths.`);
