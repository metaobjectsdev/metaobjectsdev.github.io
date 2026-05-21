# metaobjects.dev

Open-source project site for the **MetaObjects** metadata standard. Deployed at <https://metaobjects.dev/>.

This repo is the static site only. The canonical source code, specification, and conformance fixtures live in [`metaobjectsdev/metaobjects`](https://github.com/metaobjectsdev/metaobjects).

## Why this repo is small on purpose

In the AI-coding era, the role of a project documentation site has narrowed. Developers learn libraries through AI assistants (Claude, Cursor, Copilot, Windsurf) that load context from the actual source repository, the spec, and `llms.txt`. A 200-page SDK-style docs site is no longer the right artifact.

This site exists to do three things:

1. **Be a credible front door for humans** — a short landing that says what MetaObjects is, what status each implementation is in, and where to go for the spec.
2. **Serve AI assistants well** — ship a maintained [`llms.txt`](https://metaobjects.dev/llms.txt) index and [`llms-full.txt`](https://metaobjects.dev/llms-full.txt) corpus so coding agents have an authoritative, version-pinned context source.
3. **Point at the real material** — link directly into the [`metaobjects` monorepo](https://github.com/metaobjectsdev/metaobjects) for spec, quickstarts, code, and conformance fixtures. The monorepo is the truth; this site is the signpost.

## Structure

```
metaobjects.dev/
├── .github/workflows/    # GitHub Pages deploy
├── www/                  # site root (deployed)
│   ├── CNAME             # metaobjects.dev
│   ├── images/           # logos
│   ├── index.html        # minimal landing page
│   ├── styles.css        # navy + gold brand
│   ├── llms.txt          # AI assistant index (Answer.AI convention)
│   ├── llms-full.txt     # full Markdown corpus for LLM context
│   └── archive/          # prior site versions (preserved, not deployed at root)
├── docs/
│   └── archive/          # prior content-strategy docs (preserved)
└── README.md
```

## Deploy

GitHub Pages, custom domain `metaobjects.dev` (CNAME in `www/CNAME`). Workflow in `.github/workflows/` builds on push to `main` and deploys the contents of `www/`.

> **Note on HTTPS:** the GitHub Pages certificate for `metaobjects.dev` was in a `bad_authz` ACME state as of 2026-05-21. To re-trigger HTTPS provisioning, toggle the **Enforce HTTPS** checkbox in repo Settings → Pages off and on, or remove + re-add the custom domain.

## Brand consistency

Navy `#0F1B3C` / gold `#D4AF37` palette, Inter + JetBrains Mono. Consistent with [dougmealing.com](https://dougmealing.com) and [metaobjects.com](https://metaobjects.com).

## License

Site source: Apache License 2.0 (same as the underlying MetaObjects project).
