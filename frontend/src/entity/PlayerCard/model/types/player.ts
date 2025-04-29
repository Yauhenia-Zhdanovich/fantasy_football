import { z } from "zod";

const PlayerSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  photo: z.string(),
  birth: z.string(),
  height: z.string(),
  weight: z.string()
})

const TeamSchema = z.object({
  name: z.string(),
  logo: z.string()
})

const LeagueSchema = z.object({
  name: z.string(),
  logo: z.string()
})

const GameSchema = z.object({
  appearances: z.number(),
  position: z.string(),
  rating: z.number(),
  captain: z.boolean()
})

const GoalsSchema = z.object({
  total: z.number(),
  conceded: z.number(),
  assists: z.number(),
  saves: z.number()
})

const PassesSchema = z.object({
  total: z.number(),
  key: z.number()
})

const CardsSchema = z.object({
  yellow: z.number(),
  yellowred: z.number(),
  red: z.number()
})

const PenaltySchema = z.object({
  won: z.number(),
  committed: z.number(),
  scored: z.number(),
  missed: z.number(),
  saved: z.number()
})

const DuelsSchema = z.object({
  total: z.number(),
  won: z.number()
})

export const PlayerDataSchema = z.object({
  player: PlayerSchema,
  team: TeamSchema,
  league: LeagueSchema,
  games: GameSchema,
  goals: GoalsSchema,
  passes: PassesSchema,
  cards: CardsSchema,
  penalty: PenaltySchema,
  duels: DuelsSchema
})

export const PlayersListSchema = z.object({
  page: z.number(),
  total: z.number(),
  totalPages: z.number(),
  players: z.array(PlayerDataSchema)
})

export type Player = z.infer<typeof PlayerDataSchema> 
