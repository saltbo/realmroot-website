import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string().default('Realmroot'),
    language: z.enum(['en', 'zh-CN']),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
