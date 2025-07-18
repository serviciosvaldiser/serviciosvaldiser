// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://serviciosvaldiser.github.io/serviciosvaldiser/',
  base: '/serviciosvaldiser/',
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind()]
});