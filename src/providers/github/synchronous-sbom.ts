import { Octokit } from "@octokit/rest";

// Intended rule: github-synchronous-sbom-endpoint-removal-2026-11-13
const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

export function synchronousSbomEndpointExample(): Promise<unknown> {
  return client.request("GET /{owner}/{repo}/dependency-graph/sbom", {
    owner: "fixture-owner",
    repo: "fixture-repository",
  });
}
