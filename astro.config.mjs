// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Live location. For a custom domain later, set this to that domain and
  // leave PAGES_BASE unset (base stays "/").
  site: 'https://shubhxui.github.io',
  // "/" for root hosts (Cloudflare, custom domain); the CI sets PAGES_BASE
  // to "/Amruta" so GitHub Pages serves correctly from the subpath.
  base: process.env.PAGES_BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
