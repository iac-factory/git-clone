# [`@iac-factory/git-clone`](https://github.com/iac-factory/git-clone) #
           
*Anything with a `ⓘ` is a dropdown containing
  additional, contextual information.* 

## Setup (Local Development) ##

```shell
# --> (1) Clone the repository
# --> (2) Change into the local clone's directory

cd "$(git rev-parse --show-toplevel)" && npm install
```

## Usage(s) ##


<details>
<summary>Security Disclaimer ⓘ</summary>

## Disclaimer ##

**CLI utilities can be incredibly dangerous.**

- `stdin`, `os.exec`, and shells are easy to interface and therefore exploit.
- Having the ability to issue `os.exec` or interface `stdin` always makes the
  application dangerous.
- Protecting against harmful bugs or malicious actors isn't difficult if
  the application's logic is handled correctly, and precautions are made
  to disable [`REPLs`](https://en.wikipedia.org/wiki/Read–eval–print_loop)
  (but allowing `SIGKILL`, `SIGSTOP`, and other user-controlled signals).

A language's packaging utility (`npx`, `pep`, `cargo`, etc.) extends some amazing capabilities,
but should never have the opportunity to be taken advantage of (***Development Supply-Chain Attacks***).

Ensure due diligence in writing cli applications.

</details>

### `.npmrc` ###

**The following section is required**.

```ini
; GitHub `npm` Configuration for the `@iac-factory` Scope
@iac-factory:registry = https://npm.pkg.github.com

; Scope Authentication - See EOF (1) Reference 
//npm.pkg.github.com/:_authToken=[TOKEN]

# /// (1) https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
```

<details>
<summary>Advanced Configuration ⓘ</summary>

### `~/.npmrc` ###

```ini
; For reference, every programming language's package-manager
; has a similar *.*rc (dot-rc) related setup (few exceptions
; include Go, C, etc.)

;
; Defaults := $ npm config ls --list
;          -> $ npm config ls --json

fund = false
cache = ~/.npm
prefix = /usr/local
package-lock = true
engine-strict = false

# --> loglevel = debug

registry = https://registry.npmjs.org/

; Package Initialization

; Personal Preference
init.author.email = jacob.sanders@cloudhybrid.io
init.author.name = Jacob B. Sanders
init.author.url = https://github.com/iac-factory
init.license = BSD-2-Clause
init.version = 0.0.1

; @cloud-technology:registry=https://gitlab.cloud-technology.io/api/v4/packages/npm/
; @iac-factory:registry=https://gitlab.cloud-technology.io/api/v4/packages/npm/

bin-links = true

; GitHub `npm` Configuration for the `@cloud-technology` Scope
@cloud-technology:registry = https://npm.pkg.github.com

; GitHub `npm` Configuration for the `@iac-factory` Scope
@iac-factory:registry = https://npm.pkg.github.com

; Scope Authentication - See EOF (1) Reference
; //npm.pkg.github.com/:_authToken=[TOKEN]

# /// (1) https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
```

</details>

## References ##

Regardless of involvements with the project, please acknowledge
the following philosophies:

- [**Versioning**](https://semver.org) is not an arbitrarily made up concept ([The 12-Factor Application](https://12factor.net/build-release-run)).
- For better or for worse, it's never okay to affect others without communication.
- *[Documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/4/html/introduction_to_system_administration/s1-philosophy-document)* is no different than code.

<details>
<summary>Releasing & Deployments ⓘ</summary>

### Release Management ###

In order to release a new version(s) of applicable packages,

```shell
cd "$(git rev-parse --show-toplevel)" && npm publish
```

A series of prompts will follow if applicable to candidate.

</details>
