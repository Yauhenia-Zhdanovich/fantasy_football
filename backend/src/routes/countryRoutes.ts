import { FastifyInstance } from 'fastify';
import { getCountries } from '../controllers/countryController.ts';
import { GetCountriesResponseSchema } from '../schemas/countrySchemas.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';

export default async function countryRoutes(fastify: FastifyInstance) {
  fastify.get('/countries', {
    schema: {
      description: 'Get all countries',
      tags: ['Country'],
      response: {
        200: zodToJsonSchema(GetCountriesResponseSchema, { target: 'openApi3' }),
      },
    },
    handler: getCountries,
  });
}
