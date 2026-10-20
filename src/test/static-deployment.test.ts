import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { staticPagePaths, staticPrerenderOptions } from "../../scripts/static-pages";
import { checkStaticOutput } from "../../scripts/check-static-output";

describe("FTP HTML export", () => {
  it("enables prerendering for the homepage and all ten measure pages", () => {
    expect(staticPrerenderOptions.prerender.enabled).toBe(true);
    expect(staticPagePaths).toContain("/");
    expect(staticPagePaths.filter((path) => path.startsWith("/opatreni/"))).toHaveLength(10);
    expect(staticPagePaths.filter((path) => path.startsWith("/verze-2/opatreni/"))).toHaveLength(10);
    expect(staticPagePaths).toContain("/verze-2");
    expect(new Set(staticPagePaths).size).toBe(32);
  });

  it("rejects missing index.html and accepts a complete static site", () => {
    const directory = mkdtempSync(join(tmpdir(), "reform-static-"));
    try {
      expect(checkStaticOutput(directory)).toHaveLength(32);
      for (const path of staticPagePaths) {
        const folder = path === "/" ? directory : join(directory, path.slice(1));
        mkdirSync(folder, { recursive: true });
        writeFileSync(join(folder, "index.html"), "<!doctype html><html lang='cs'><body>Reforma 8PLUS2</body></html>");
      }
      expect(checkStaticOutput(directory)).toEqual([]);
      rmSync(join(directory, "index.html"));
      expect(checkStaticOutput(directory)).toEqual([`Missing HTML: ${join(directory, "index.html")}`]);
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
});