import { Octokit } from "@octokit/rest";

const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

export function safeGithubReplacement(): Promise<unknown> {
  return client.request("POST /{owner}/{repo}/dependency-graph/sbom/generate-report", {
    owner: "fixture-owner",
    repo: "fixture-repository",
  });
}
