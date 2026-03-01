// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlosmiyares.cloud',
  integrations: [
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
});
