import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    visibility: z.enum(["public", "private"]).default("public"),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
