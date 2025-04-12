import { FastifyInstance } from 'fastify';
import { getTeamsByYear } from '../controllers/teamController.ts';
import {
  GetTeamsByYearQuerySchema,
  GetTeamsByYearResponseSchema,
} from '../schemas/teamSchemas.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';

export default async function teamRoutes(fastify: FastifyInstance) {
  fastify.get(
    '/teams-by-year',
    {
      schema: {
        querystring: zodToJsonSchema(GetTeamsByYearQuerySchema, { target: 'openApi3' }),
        response: {
          200: zodToJsonSchema(GetTeamsByYearResponseSchema, { target: 'openApi3' }),
        },
        tags: ['Teams'],
        summary: 'Get teams and their stats by year',
        description: 'Returns a list of teams with stats, league, and venue info for a given year.',
      },
    },
    getTeamsByYear
  );
}
