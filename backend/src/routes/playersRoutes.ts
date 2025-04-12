import { FastifyInstance } from 'fastify';
import { getPlayersByYear } from '../controllers/playerController.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { GetPlayersByYearQuerySchema, GetPlayersByYearResponseSchema } from '../schemas/playerSchemas.ts';

export default async function playerRoutes(fastify: FastifyInstance) {
  fastify.get('/players-by-year', {
    schema: {
      querystring: zodToJsonSchema(GetPlayersByYearQuerySchema, { target: 'openApi3' }),
      response: {
        200: zodToJsonSchema(GetPlayersByYearResponseSchema, { target: 'openApi3' }),
      },
      tags: ['Players'],
      description: 'Get players and their stats for a specific season year.',
      summary: 'Fetch players by year',
    },
  }, getPlayersByYear);
}
