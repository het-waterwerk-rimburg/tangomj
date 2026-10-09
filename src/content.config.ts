/**
 * Blog articles: one Markdown file per article and language, in
 * src/content/blog/<language>/<slug>.md (language = en, nl or de).
 *
 * Use the same file name (slug) for the translations of one article: the
 * site then links them to each other (language menu, hreflang, sitemap).
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences: shown in the blog list and in search results. */
      description: z.string(),
      /** Publication date, e.g. 2026-10-09. */
      date: z.coerce.date(),
      /**
       * Optional YouTube video shown at the end of the article (click to play,
       * see src/components/YouTubeVideo.astro). `poster` is a local still image,
       * relative to the Markdown file.
       */
      video: z
        .object({
          id: z.string(),
          title: z.string(),
          poster: image(),
        })
        .optional(),
    }),
});

export const collections = { blog };
