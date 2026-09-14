# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

## Generated files — do not hand-edit

- `www/reference/` is generated at deploy time (`.github/workflows/deploy.yml` clones the
  public reference implementation and runs `meta docs`). Anything committed there is
  replaced on every deploy.
- `www/llms.txt`, `www/llms-full.txt` and `www/assess.md` are copied in from the MetaObjects
  monorepo at deploy time, pinned to the release tag — the first two from `docs/llms/`, the
  third from `agent-context/skills/metaobjects-fit-assessment/SKILL.md` (its body, from the
  first top-level heading). All three are gitignored here, because a second editable copy is
  what let each of them drift. Fix them upstream.
- The four version coordinates on the pages are not hand-written either: any element carrying
  `data-registry="npm|maven|nuget|pypi|metamodel"` has its text replaced at deploy from the
  release tag's `examples/showcase/site-payload.json`. The numbers sitting in the committed
  HTML are placeholders. Preview what a deploy would render with
  `bun run site:preview --site <this-repo>/www` from the monorepo.

## Content that mirrors the CLI

Several code blocks on `www/getting-started.html` reproduce real CLI output: the scaffold
tree, `meta init`'s closing line, the `meta gen --list --probe` and `meta eject` excerpts, the
wired `metaobjects.config.ts`, the `meta gen` and `meta migrate` runs, and the curl calls.
Nothing checks that they still match, so they drift silently when the CLI changes. The
scaffold's authoritative source is the monorepo's
`server/typescript/packages/cli/src/commands/init.ts` (`OWNED_GENERATORS_DIR`,
`buildMetaobjectsConfigBody`, `SCAFFOLD_SUMMARY`, `NEXT_STEPS`). For the rest, **run the flow
end to end against the published CLI in a scratch project OUTSIDE `/tmp`** and copy from what
it prints. A stale `/tmp/node_modules` shadows packages the project did not install, so a run
there can pass on a page that fails for a newcomer. **Capture with `--format text`**, or from a real
terminal: the CLI's default format is TTY-aware, so a piped capture prints the machine format
(TOON), which no human following the page will see. Don't work from memory or the CHANGELOG.

Since 1.0.4 (ADR-0034 Amendment 2) `meta init` scaffolds `codegen/generators/` EMPTY with
`generators: []`, no dependencies, and no `src/db.ts`. The page's doctrinal claim is that the
generators an adopter CHOOSES (`meta gen --list --probe`, then `meta eject <names>`) are copied
into their repo to **own and edit**, and `meta gen` runs those local copies rather than the
packaged ones. `www/video/getting-started.vtt` captions a recording made before 1.0.4, when
`init` still scaffolded the generators; `www/videos.html` says so beside it.

## Editing the `pre.gs-code` blocks

`www/getting-started.html` hand-writes its syntax highlighting with `<span class="c">`
(comment), `s` (string), `k` (keyword), `n` (the `new` status in `meta gen` output). An unclosed span or a
misaligned comment column does not show up in a diff review — render the page and look at
the block before calling an edit done. In the scaffold tree, the `#` comments all sit at
visible column 33.
