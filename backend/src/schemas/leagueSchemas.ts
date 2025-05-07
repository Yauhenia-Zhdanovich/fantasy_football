import { z } from 'zod';
import 'zod-openapi/extend';

export const LeagueSchema = z
  .object({
    id: z.number().openapi({ example: 39 }),
    name: z.string().openapi({ example: 'Premier League' }),
    type: z.string().openapi({ example: 'League' }),
    logo: z.string().url().openapi({ example: 'https://media.api-sports.io/football/leagues/39.png' }),
    country: z.object({
      name: z.string().openapi({ example: 'England' }),
      code: z.string().openapi({ example: 'GB-ENG' }),
      flag: z.string().url().openapi({ example: 'https://media.api-sports.io/flags/gb-eng.svg' }),
    }).openapi({ title: 'Country' }),
  })
  .openapi({ title: 'League' });

export const GetLeaguesResponseSchema = z.array(LeagueSchema).openapi({ title: 'GetLeaguesResponse' });

export type GetLeaguesResponse = z.infer<typeof GetLeaguesResponseSchema>;
