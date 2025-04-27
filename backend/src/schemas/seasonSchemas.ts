import { z } from 'zod';
import 'zod-openapi/extend';

export const SeasonSchema = z.object({
  year: z.number(),
  start: z.string().optional(),
  end: z.string().optional(),
  current: z.boolean().optional(),
}).openapi({ title: 'Season' });

export const GetSeasonsResponseSchema = z.array(SeasonSchema).openapi({
  title: 'GetSeasonsResponse',
  description: 'List of all available seasons',
});

export type SeasonType = z.infer<typeof SeasonSchema>;
export type GetSeasonsResponse = z.infer<typeof GetSeasonsResponseSchema>;
