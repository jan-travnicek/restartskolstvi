import { allMeasures } from "../src/lib/content";

// Concrete URLs are required: a parameterized route is not a static page.
export const staticPagePaths = [
  "/",
  "/opatreni",
  "/data",
  "/myty-a-fakta",
  "/odborna-opora",
  "/pro-koho",
  ...allMeasures.map((measure) => `/opatreni/${measure.slug}`),
];

export const staticPrerenderOptions = {
  pages: staticPagePaths.map((path) => ({ path })),
  prerender: {
    enabled: true,
    autoStaticPathsDiscovery: false,
    crawlLinks: false,
    failOnError: true,
  },
};