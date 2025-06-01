import { z } from 'zod';
import 'zod-openapi/extend';

export const GetPlayersByYearQuerySchema = z
  .object({
    year: z.string().regex(/^\d{4}$/, 'Year must be a 4-digit string'),
    page: z.string().optional(),
    per_page: z.string().optional(),
    league: z
      .string()
      .regex(/^\d+$/, 'League must be a numeric string')
      .optional()
      .openapi({ example: '39', description: 'External league.id to filter players by' }),
  })
  .openapi({ title: 'GetPlayersByYearQuery' });

const BirthSchema = z.object({
  date: z.string().nullable(),
  place: z.string().nullable(),
  country: z.string().nullable(),
});

const PlayerSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    age: z.number().nullable(),
    photo: z.string().url(),
    birth: BirthSchema,
    height: z.string().nullable(),
    weight: z.string().nullable(),
  })
  .openapi({ title: 'Player' });

const TeamSchema = z
  .object({
    name: z.string().nullable(),
    logo: z.string().url().nullable(),
  })
  .openapi({ title: 'PlayerTeam' });

const LeagueSchema = z
  .object({
    name: z.string().nullable(),
    logo: z.string().url().nullable(),
  })
  .openapi({ title: 'PlayerLeague' });

const GamesSchema = z
  .object({
    appearances: z.number().nullable(),
    position: z.string().nullable(),
    rating: z.number().nullable(),
    captain: z.boolean().nullable(),
  })
  .openapi({ title: 'Games' });

const GoalsSchema = z
  .object({
    total: z.number().nullable(),
    conceded: z.number().nullable(),
    assists: z.number().nullable(),
    saves: z.number().nullable(),
  })
  .openapi({ title: 'Goals' });

const PassesSchema = z
  .object({
    total: z.number().nullable(),
    key: z.number().nullable(),
  })
  .openapi({ title: 'Passes' });

const CardsSchema = z
  .object({
    yellow: z.number().nullable(),
    yellowred: z.number().nullable(),
    red: z.number().nullable(),
  })
  .openapi({ title: 'Cards' });

const PenaltySchema = z
  .object({
    won: z.number().nullable(),
    committed: z.number().nullable(),
    scored: z.number().nullable(),
    missed: z.number().nullable(),
    saved: z.number().nullable(),
  })
  .openapi({ title: 'Penalty' });

const DuelsSchema = z
  .object({
    total: z.number().nullable(),
    won: z.number().nullable(),
  })
  .openapi({ title: 'Duels' });

export const PlayerWithStatsSchema = z
  .object({
    player: PlayerSchema,
    team: TeamSchema,
    league: LeagueSchema,
    games: GamesSchema,
    goals: GoalsSchema,
    passes: PassesSchema,
    cards: CardsSchema,
    penalty: PenaltySchema,
    duels: DuelsSchema,
  })
  .openapi({ title: 'PlayerWithStats' });

export const GetPlayersByYearResponseSchema = z
  .object({
    page: z.number(),
    total: z.number(),
    totalPages: z.number(),
    data: z.array(PlayerWithStatsSchema),
  })
  .openapi({ title: 'GetPlayersByYearResponse' });

export type GetPlayersByYearQuery = z.infer<typeof GetPlayersByYearQuerySchema>;
export type GetPlayersByYearResponse = z.infer<typeof GetPlayersByYearResponseSchema>;
