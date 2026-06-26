// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://viamedmultisaude.com.br',
  compressHTML: true,

  build: {
    assets: '_assets',
  },

  integrations: [sitemap()],
});