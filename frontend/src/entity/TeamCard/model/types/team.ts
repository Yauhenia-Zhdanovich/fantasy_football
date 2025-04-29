import { z } from "zod";

const CountrySchema = z.object({
  name: z.string(),
  code: z.string(),
  flag: z.string(),
})

const TeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  founded: z.number()
})

const LeagueSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  country: CountrySchema
})

const VenueSchema = z.object({
  name: z.string(),
  image: z.string(),
  capacity: z.number(),
  address: z.string(),
})

const StatsSchema = z.object({
  played: z.number(),
  wins: z.number(),
  draws: z.number(),
  loses: z.number(),
  goals: z.number(),
})

export const TeamDataSchema = z.object({
  team: TeamSchema,
  league: LeagueSchema,
  venue: VenueSchema,
  stats: StatsSchema
})

export type Team = z.infer<typeof TeamDataSchema>