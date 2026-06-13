import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    date:         z.coerce.date(),
    author:       z.string().optional(),
    category:     z.enum(['projects', 'water-testing', 'green-fair', 'general']),
    featuredImage: z.string().optional(),
    excerpt:      z.string().optional(),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    date:        z.coerce.date(),
    time:        z.string().optional(),
    location:    z.string(),
    description: z.string(),
    bookingLink: z.string().url().optional(),
    category:    z.enum(['work-party', 'walk', 'meeting', 'green-fair', 'general']),
  }),
});

const waterReports = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    date:     z.coerce.date(),
    summary:  z.string(),
    reportUrl: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:  z.string(),
    status: z.enum(['active', 'completed']),
    description: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

const greenFairFaqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order:    z.number().optional(),
  }),
});

const greenFairSponsors = defineCollection({
  type: 'data',
  schema: z.object({
    name:    z.string(),
    logo:    z.string().optional(),
    website: z.string().url().optional(),
    tier:    z.enum(['gold', 'silver', 'community']),
  }),
});

export const collections = {
  news,
  events,
  'water-reports': waterReports,
  projects,
  'green-fair-faqs': greenFairFaqs,
  'green-fair-sponsors': greenFairSponsors,
};
