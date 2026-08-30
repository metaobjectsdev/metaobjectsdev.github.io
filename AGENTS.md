# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Generated files — do not hand-edit

- `www/llms.txt` and `www/llms-full.txt` are **generated output**, copied in from the
  MetaObjects monorepo's `docs/llms/` by the deploy job. Editing them in this repo creates
  drift that is silently overwritten on the next deploy. Fix them upstream instead.

## Content that mirrors the CLI

Several code blocks on `www/getting-started.html` reproduce what `meta init` actually writes
— the scaffold tree, and the `metaobjects.config.ts` example. Nothing checks that they still
match, so they drift silently when the CLI's scaffold changes. The authoritative source is
the monorepo's `server/typescript/packages/cli/src/commands/init.ts` (the
`SCAFFOLDED_GENERATOR_NAMES`, `OWNED_GENERATORS_DIR`, `buildMetaobjectsConfigBody`, and
`DB_STUB_*` constants). Read it before changing those blocks; don't work from memory.

The page also carries a doctrinal claim worth keeping intact: the generators under
`codegen/generators/` are copied into the adopter's repo for them to **own and edit**, and
`meta gen` runs those local copies rather than the packaged ones. `www/video/getting-started.vtt`
states the same thing — if a page edit contradicts it, the page is the thing that is wrong.

## Editing the `pre.gs-code` blocks

`www/getting-started.html` hand-writes its syntax highlighting with `<span class="c">`
(comment), `s` (string), `k` (keyword), `n` (the `NEW` marker). An unclosed span or a
misaligned comment column does not show up in a diff review — render the page and look at
the block before calling an edit done. In the scaffold tree, the `#` comments all sit at
visible column 33.
