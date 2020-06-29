# nucleus-integration-js-fruit-dependencies

This repo contains three packages for dev testing purposes:

    - @nucleus-integration/kiwi
    - @nucleus-integration/lemon
    - nucleus-integration-banana

## Install

```bash
  yarn install
```

## Test

```bash
  yarn test
```

## Deploy

```
# Gets the commit ready (changes the version without pushing nor commiting)
lerna version --no-git-tag-version --no-push --no-commit-hooks --yes [VESION_HERE]

# Publish directly (it will prompt for the version) on a give dist-tag - creates commit and tag
lerna publish --registry=https://nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/ --dist-tag canary

# Canary (like version but this one does push a hash of the commit) - predefined version
lerna publish from-git --registry=https://nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/ --canary --preid=alpha

# Publish without commit (needs a tag)
lerna publish from-git --no-verify-access --no-verify-registry --registry=https://nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/

# Publish without commit (current package version)
lerna publish from-package --no-verify-access --no-verify-registry --registry=https://nexus.soma.salesforce.com/nexus/content/repositories/npmjs-internal/

```

















