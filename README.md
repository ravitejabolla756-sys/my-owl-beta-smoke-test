# MY OWL beta compatibility smoke tests

This repository is a deterministic static-analysis fixture set for MY OWL beta compatibility validation. It is not a production application and must never call provider APIs.

The `src/providers` files contain small, positive examples for the five currently reviewed providers and ten compatibility rules. The `src/safe` files contain inert replacement examples for each provider. They use recognized package names and environment-variable names only; no API keys, tokens, cookies, private URLs, credentials, or realistic secret values are stored here.

Run the local checks with:

```text
npm run verify
npm run typecheck
```

`npm run verify` checks the manifest, file paths, duplicate paths, common secret-like literals, and network-call patterns. Type validation requires TypeScript to be available in the environment; the provider declarations in `src/provider-shims.d.ts` keep validation static and do not install or contact provider SDKs.

The expected result category in `fixture-manifest.json` is the expected compatibility outcome for the positive examples, not proof that MY OWL produced that result. Findings must be confirmed from the MY OWL dashboard after a successful scan. Absence of a finding is not proof unless the scan completed successfully. If MY OWL productization or compatibility evaluation is disabled, the findings cannot be fully verified.

These fixtures intentionally use direct static values. Dynamic property names, reflection, computed strings, generated code, unsupported syntax, or unresolved versions can produce `NEEDS_REVIEW` instead of a deterministic finding. That behavior should be recorded as a product result, not “fixed” by changing the fixture after the scan.
