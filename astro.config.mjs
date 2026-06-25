// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://viamedmultisaude.com.br',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
