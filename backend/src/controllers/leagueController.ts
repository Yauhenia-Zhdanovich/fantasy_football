import { FastifyRequest, FastifyReply } from 'fastify';
import { League } from '../models/League.ts';

export const getLeagues = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const rawLeagues = await League.find({ 'seasons.year': 2023 });

    const seen = new Set();
    const uniqueLeagues = rawLeagues.filter(l => {
      if (seen.has(l.id)) return false;
      seen.add(l.id);
      return true;
    });

    const response = uniqueLeagues.map(l => ({
      id: l.id,
      name: l.name,
      type: l.type,
      logo: l.logo,
      country: l.country,
    }));
    console.log(response);
    reply.send(response);
  } catch (err) {
    req.log.error(err);
    reply.status(500).send({ error: 'Failed to fetch leagues' });
  }
};
