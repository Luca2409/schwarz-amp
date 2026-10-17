import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({
    base: './src/content/pages',
    pattern: '**/*.md',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),

    heroEyebrow: z.string(),
    heroTitlePrefix: z.string(),
    heroTitleHighlight: z.string(),
    heroText: z.string(),
    heroImage: image(),
    heroImageLabel: z.string(),

    factsEyebrow: z.string(),
    factsTitle: z.string(),
    facts: z.array(z.object({ value: z.string(), label: z.string() })),

    primaryCtaLabel: z.string(),
    primaryCtaHref: z.string(),
    secondaryCtaLabel: z.string(),
    secondaryCtaHref: z.string(),

    aboutEyebrow: z.string(),
    aboutTitle: z.string(),

    competenciesEyebrow: z.string(),
    competenciesTitle: z.string(),

    qualityEyebrow: z.string(),
    qualityTitle: z.string(),
    qualityCardTitle: z.string(),
    qualityCardText: z.string(),
    qualityImage: image().optional(),
    qualityImageAlt: z.string().optional(),

    contactTitle: z.string(),
    contactLabel: z.string(),
  }),
});

const competencies = defineCollection({
  loader: glob({
    base: './src/content/competencies',
    pattern: '**/*.md',
  }),
  schema: ({ image }) => z.object({
    translationKey: z.string(),
    number: z.string(),
    title: z.string(),
    teaser: z.string(),
    order: z.number(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: image().optional(),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

// Impressum, privacy policy etc., linked in the footer.
const legal = defineCollection({
  loader: glob({
    base: './src/content/legal',
    pattern: '**/*.md',
  }),
  schema: z.object({
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  pages,
  competencies,
  legal,
};
