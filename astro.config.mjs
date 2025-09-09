// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://oisin-t-ucd.github.io/",
  base: 'newdeploy',
  integrations: [preact()],
});
