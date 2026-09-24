import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://me-voy-a-poner-pilas.netlify.app",
  integrations: [preact()],
});