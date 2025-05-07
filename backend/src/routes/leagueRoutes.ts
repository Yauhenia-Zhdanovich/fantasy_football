import { FastifyInstance } from 'fastify';
import { getLeagues } from '../controllers/leagueController.ts';
import { GetLeaguesResponseSchema } from '../schemas/leagueSchemas.ts';

export default async function leagueRoutes(fastify: FastifyInstance) {
  fastify.get('/leagues', {
    schema: {
      response: {
        200: GetLeaguesResponseSchema,
      },
      summary: 'Get leagues for year 2023',
      tags: ['Leagues'],
    },
    handler: getLeagues,
  });
}