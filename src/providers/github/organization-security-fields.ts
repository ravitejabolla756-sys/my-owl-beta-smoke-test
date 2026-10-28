import { Octokit } from "@octokit/rest";

// Intended rule: github-organization-security-fields-removed-2026-04-21
const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function removedOrganizationSecurityFieldsExample(): Promise<unknown> {
  const response = await client.request("GET /orgs/{org}", { org: "fixture-organization" });
  return {
    advanced_security_enabled_for_new_repositories: response.data.advanced_security_enabled_for_new_repositories,
    dependabot_alerts_enabled_for_new_repositories: response.data.dependabot_alerts_enabled_for_new_repositories,
    dependabot_security_updates_enabled_for_new_repositories: response.data.dependabot_security_updates_enabled_for_new_repositories,
    dependency_graph_enabled_for_new_repositories: response.data.dependency_graph_enabled_for_new_repositories,
    secret_scanning_enabled_for_new_repositories: response.data.secret_scanning_enabled_for_new_repositories,
    secret_scanning_push_protection_enabled_for_new_repositories: response.data.secret_scanning_push_protection_enabled_for_new_repositories,
    secret_scanning_validity_checks_enabled: response.data.secret_scanning_validity_checks_enabled,
  };
}
