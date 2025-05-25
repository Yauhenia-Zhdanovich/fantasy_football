import { FastifyRequest, FastifyReply } from 'fastify';
import { Season } from '../models/Season.ts';
import { TeamStat } from '../models/TeamStat.ts';

export const getTeamsByYear = async (
  request: FastifyRequest<{ Querystring: { year: string; page?: string; per_page?: string } }>,
  reply: FastifyReply
) => {
  try {
    const year = parseInt(request.query.year);
    const page = parseInt(request.query.page || '1');
    const perPage = parseInt(request.query.per_page || '20');
    const skip = (page - 1) * perPage;

    if (isNaN(year)) {
      return reply.status(400).send({ error: 'Invalid or missing "year" query parameter' });
    }

    const season = await Season.findOne({ year });
    if (!season) {
      return reply.status(404).send({ error: `No season found for year ${year}` });
    }

    const total = await TeamStat.countDocuments({ season: season._id });
    const stats = await TeamStat.find({ season: season._id })
      .populate('team')
      .populate('league')
      .skip(skip)
      .limit(perPage);

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

    return reply.send({
      page,
      per_page: perPage,
      total,
      totalPages: Math.ceil(total / perPage),
      data: result,
    });
  } catch (err) {
    request.log.error(err);
    return reply.status(500).send({ error: 'Internal server error' });
  }
};
