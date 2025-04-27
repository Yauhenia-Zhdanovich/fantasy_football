import { FastifyRequest, FastifyReply } from 'fastify';
import { Country } from '../models/Country.ts';

export const getCountries = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const countries = await Country.find({});
    reply.send(countries);
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: 'Failed to fetch countries' });
  }
};
