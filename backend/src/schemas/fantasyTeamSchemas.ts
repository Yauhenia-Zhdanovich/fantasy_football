import { z } from 'zod';
import 'zod-openapi/extend';
import { VALID_LINEUPS } from './ligneupSchema.ts';

export const CreateFantasyTeamSchema = z
  .object({
    name: z
      .string()
      .min(3)
      .max(30)
      .openapi({ example: 'Team Alpha' }),
    country: z
      .string()
      .openapi({ example: 'GB-ENG' }),
    competition: z
      .string()
      .refine(val => /^[a-f\d]{24}$/i.test(val) || /^\d+$/.test(val), {
        message: 'Invalid competition ID — must be ObjectId or numeric ID',
      })
      .openapi({ example: '39' }),
    lineup: z
      .enum(Object.keys(VALID_LINEUPS) as [keyof typeof VALID_LINEUPS])
      .openapi({ example: '4-4-2' }),
    players: z
      .array(z.string().regex(/^[a-f\d]{24}$/i))
      .min(1)
      .openapi({
        example: [
          '64e79fae0b5f2a4d4db92d21',
          '64e79fae0b5f2a4d4db92d22',
          '64e79fae0b5f2a4d4db92d23',
        ],
      }),
  })
  .openapi({
    title: 'CreateFantasyTeamInput',
    description: 'Payload required to create a fantasy team',
  });

export type CreateFantasyTeamInput = z.infer<typeof CreateFantasyTeamSchema>;
