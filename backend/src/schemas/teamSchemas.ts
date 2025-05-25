import { z } from 'zod';
import 'zod-openapi/extend';

export const GetTeamsByYearQuerySchema = z.object({
  year: z.string().regex(/^\d{4}$/),
  page: z.string().optional(),
  per_page: z.string().optional(),
}).openapi({ title: 'GetTeamsByYearQuery' });

const CountrySchema = z
  .object({
    name: z.string(),
    code: z.string(),
    flag: z.string().url(),
  })
  .openapi({ title: 'Country' });

const LeagueSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    logo: z.string().url(),
    country: CountrySchema,
  })
  .openapi({ title: 'League' });

const VenueSchema = z
  .object({
    name: z.string().nullable(),
    image: z.string().url().nullable(),
    capacity: z.number().nullable(),
    address: z.string().nullable(),
  })
  .openapi({ title: 'Venue' });

const TeamSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    logo: z.string().url(),
    founded: z.number().nullable(),
  })
  .openapi({ title: 'Team' });

const StatsSchema = z
  .object({
    played: z.number(),
    wins: z.number(),
    draws: z.number(),
    loses: z.number(),
    goals: z.number(),
  })
  .openapi({ title: 'Stats' });

export const TeamWithStatsSchema = z
  .object({
    team: TeamSchema,
    league: LeagueSchema,
    venue: VenueSchema,
    stats: StatsSchema,
  })
  .openapi({ title: 'TeamWithStats' });

export const GetTeamsByYearResponseSchema = z
  .object({
    page: z.number(),
    total: z.number(),
    totalPages: z.number(),
    data: z.array(TeamWithStatsSchema),
  })
  .openapi({ title: 'GetTeamsByYearResponse' });


export type GetTeamsByYearQuery = z.infer<typeof GetTeamsByYearQuerySchema>;
export type GetTeamsByYearResponse = z.infer<typeof GetTeamsByYearResponseSchema>;
