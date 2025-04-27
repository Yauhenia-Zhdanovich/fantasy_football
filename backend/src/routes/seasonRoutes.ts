import { FastifyInstance } from 'fastify';
import { getSeasons } from '../controllers/seasonController.ts';
import { GetSeasonsResponseSchema } from '../schemas/seasonSchemas.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';

export default async function seasonRoutes(fastify: FastifyInstance) {
  fastify.get('/seasons', {
    schema: {
      description: 'Get all seasons',
      tags: ['Season'],
      response: {
        200: zodToJsonSchema(GetSeasonsResponseSchema, { target: 'openApi3' }),
      },
    },
    handler: getSeasons,
  });
}
