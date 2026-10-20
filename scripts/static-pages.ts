import { allMeasures } from "../src/lib/content";

// Concrete URLs are required: a parameterized route is not a static page.
const basePaths = [
  "/",
  "/opatreni",
  "/data",
  "/myty-a-fakta",
  "/odborna-opora",
  "/pro-koho",
  ...allMeasures.map((measure) => `/opatreni/${measure.slug}`),
];

export const staticPagePaths = [...basePaths, ...basePaths.map((path) => (path === "/" ? "/verze-2" : `/verze-2${path}`))];

export const staticPrerenderOptions = {
  pages: staticPagePaths.map((path) => ({ path })),
  prerender: {
    enabled: true,
    autoStaticPathsDiscovery: false,
    crawlLinks: false,
    failOnError: true,
  },
};