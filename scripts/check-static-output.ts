import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { staticPagePaths } from "./static-pages";

export function checkStaticOutput(directory: string) {
  const errors: string[] = [];
  for (const path of staticPagePaths) {
    const file = resolve(directory, path === "/" ? "index.html" : `${path.slice(1)}/index.html`);
    if (!existsSync(file)) {
      errors.push(`Missing HTML: ${file}`);
      continue;
    }
    const html = readFileSync(file, "utf8");
    if (!/<html[\s>]/i.test(html) || !/Reforma|8PLUS2|8\+2/.test(html)) {
      errors.push(`Invalid reform page: ${file}`);
    }
  }
  return errors;
}

if (import.meta.main) {
  const candidates = [".output/public", "dist/client"];
  const directory = candidates.find((candidate) => existsSync(resolve(candidate, "index.html")));
  if (!directory) {
    throw new Error(`No index.html generated in ${candidates.join(" or ")}. FTP upload stopped.`);
  }
  const errors = checkStaticOutput(directory);
  if (errors.length) throw new Error(errors.join("\n"));
  // GitHub reads this value as the output of the validation step.
  console.log(`directory=./${directory}/`);
  console.error(`Verified ${staticPagePaths.length} static HTML pages for FTP.`);
}