import { z } from 'zod';
import 'zod-openapi/extend';

export const VALID_LINEUPS = {
  '4-4-2': { gk: 1, def: 4, mid: 4, fwd: 2 },
  '4-3-3': { gk: 1, def: 4, mid: 3, fwd: 3 },
  '3-5-2': { gk: 1, def: 3, mid: 5, fwd: 2 },
  '3-4-3': { gk: 1, def: 3, mid: 4, fwd: 3 },
  '5-3-2': { gk: 1, def: 5, mid: 3, fwd: 2 },
};

export const LineupSchema = z.object({
  name: z.string().openapi({ example: '4-4-2' }),
  formation: z.object({
    gk: z.number().openapi({ example: 1 }),
    def: z.number().openapi({ example: 4 }),
    mid: z.number().openapi({ example: 4 }),
    fwd: z.number().openapi({ example: 2 }),
  }),
}).openapi({ title: 'Lineup' });

export const GetLineupsResponseSchema = z.array(LineupSchema).openapi({
  title: 'GetLineupsResponse',
  description: 'List of valid fantasy football formations',
});

export type LineupType = z.infer<typeof LineupSchema>;
export type GetLineupsResponse = z.infer<typeof GetLineupsResponseSchema>;
