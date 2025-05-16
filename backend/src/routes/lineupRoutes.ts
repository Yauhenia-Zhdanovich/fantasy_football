import { FastifyInstance } from 'fastify';
import {
  VALID_LINEUPS,
  GetLineupsResponseSchema,
  LineupType,
} from '../schemas/ligneupSchema.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';

export default async function fantasyTeamRoutes(fastify: FastifyInstance) {
  fastify.get('/lineups', {
    schema: {
      tags: ['FantasyTeam'],
      summary: 'Get valid fantasy team lineups',
      description: 'Returns a list of supported fantasy football formations with lineup structure.',
      response: {
        200: zodToJsonSchema(GetLineupsResponseSchema, { target: 'openApi3' }),
      },
    },
    handler: async (_, reply) => {
      const lineups: LineupType[] = Object.entries(VALID_LINEUPS).map(([name, formation]) => ({
        name,
        formation,
      }));

      return reply.send(lineups);
    },
  });
}
