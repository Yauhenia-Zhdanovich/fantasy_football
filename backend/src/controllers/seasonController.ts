import { FastifyRequest, FastifyReply } from 'fastify';
import { Season } from '../models/Season.ts';

export const getSeasons = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const seasons = await Season.find({});
    reply.send(seasons);
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: 'Failed to fetch seasons' });
  }
};
