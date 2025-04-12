import { FastifyRequest, FastifyReply } from 'fastify';
import { Season } from '../models/Season.ts';
import { TeamStat } from '../models/TeamStat.ts';
import {
  GetTeamsByYearQuerySchema,
  GetTeamsByYearResponseSchema
} from '../schemas/teamSchemas.ts';

export const getTeamsByYear = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const parsed = GetTeamsByYearQuerySchema.safeParse(request.query);

    if (!parsed.success) {
      request.log.warn({ issues: parsed.error.issues }, 'Invalid query params');
    }

    const year = parseInt((request.query as any).year);

    const season = await Season.findOne({ year });
    if (!season) {
      return reply.status(404).send({ error: `No season found for year ${year}` });
    }

    const stats = await TeamStat.find({ season: season._id })
      .populate('team')
      .populate('league');

    const result = stats.map((s: any) => ({
      team: {
        id: s.team._id.toString(),
        name: s.team.name,
        logo: s.team.logo,
        founded: s.team.founded ?? null,
      },
      league: {
        id: s.league._id.toString(),
        name: s.league.name,
        logo: s.league.logo,
        country: s.league.country,
      },
      venue: {
        name: s.team.venue?.name ?? null,
        image: s.team.venue?.image ?? null,
        capacity: s.team.venue?.capacity ?? null,
        address: s.team.venue?.address ?? null,
      },
      stats: {
        played: s.fixtures?.played?.total ?? 0,
        wins: s.fixtures?.wins?.total ?? 0,
        draws: s.fixtures?.draws?.total ?? 0,
        loses: s.fixtures?.loses?.total ?? 0,
        goals: s.goals ?? 0,
      },
    }));

    const responseValidation = GetTeamsByYearResponseSchema.safeParse(result);
    if (!responseValidation.success) {
      request.log.warn({ issues: responseValidation.error.issues }, 'Invalid response shape');
    }

    return reply.send(result);
  } catch (err) {
    request.log.error(err);
    return reply.status(500).send({ error: 'Internal server error' });
  }
};
