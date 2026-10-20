<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Static reform content (pillars, measures, timeline) lives in `src/lib/content.ts`; pages import it so measures stay consistent across pages.
- Shared header/footer/section primitives live in `src/components/site.tsx` and wrap all routes from `__root.tsx`.
- Large diagrams/photos open through `SchemaViewer` (`src/components/schema-viewer.tsx`) instead of a plain link to the asset file, so readers get one consistent zoom/pan popup rather than a browser tab.
- `AnimatedSchema` enhances the second homepage diagram with image-aligned hotspots; keep its image geometry separate from the shared viewer so other diagrams remain unchanged.
- `EducationInfographic` rebuilds the first homepage diagram from typed stages and milestones in `src/lib/education-schema.ts`; keep path membership and ages in that source so diagram, exploration and tests agree.
- Audience copy lives alongside canonical content in `src/lib/content.ts`; `getAudiencePillars` preserves measure identity and paragraph structure so every page presents the same proposal.
- `AudienceProvider` wraps the shared site at the root and holds in-memory selection across client navigation; no page reload or browser storage is needed for this presentation preference.
- Aktuality is a standalone block on the homepage (`src/routes/index.tsx`), not a nav item or its own route, so news lives where readers first land.
- Static FTP deployment enumerates concrete pages from canonical measures in `scripts/static-pages.ts`; the workflow validates every generated HTML page and chooses the static output directory before uploading, so a successful assets-only build cannot replace the site.
