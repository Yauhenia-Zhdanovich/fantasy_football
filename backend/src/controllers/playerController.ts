import { FastifyRequest, FastifyReply } from 'fastify';
import { Season } from '../models/Season.ts';
import { PlayerStat } from '../models/PlayerStat.ts';

const getLeagueObjectIdByExternalId = async (externalId: number) => {
  const league = await import('../models/League.ts').then(mod => mod.League.findOne({ id: externalId }));
  return league?._id || null;
};

export const getPlayersByYear = async (
  request: FastifyRequest<{ Querystring: { year: string; page?: string; per_page?: string; league?: string } }>,
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

    const filter: Record<string, any> = { season: season._id };

    if (request.query.league) {
      const leagueId = parseInt(request.query.league);
      filter['league'] = await getLeagueObjectIdByExternalId(leagueId);

      if (!filter['league']) {
        return reply.status(400).send({ error: `No league found with id ${leagueId}` });
      }
    }
    const total = await PlayerStat.countDocuments(filter);

    const stats = await PlayerStat.find(filter)
      .populate('player')
      .populate('team')
      .populate('league')
      .skip(skip)
      .limit(perPage);

    const players = stats.map((s: any) => ({
      player: {
        id: s.player._id,
        name: s.player.name,
        age: s.player.age,
        photo: s.player.photo,
        birth: s.player.birth,
        height: s.player.height,
        weight: s.player.weight,
      },
      team: {
        name: s.team?.name || null,
        logo: s.team?.logo || null,
      },
      league: {
        name: s.league?.name || null,
        logo: s.league?.logo || null,
      },
      games: {
        appearances: s.games?.appearences ?? null,
        position: s.games?.position ?? null,
        rating: s.games?.rating ?? null,
        captain: s.games?.captain ?? null,
      },
      goals: {
        total: s.goals?.total ?? null,
        conceded: s.goals?.conceded ?? null,
        assists: s.goals?.assists ?? null,
        saves: s.goals?.saves ?? null,
      },
      passes: {
        total: s.passes?.total ?? null,
        key: s.passes?.key ?? null,
      },
      cards: {
        yellow: s.cards?.yellow ?? null,
        yellowred: s.cards?.yellowred ?? null,
        red: s.cards?.red ?? null,
      },
      penalty: {
        won: s.penalty?.won ?? null,
        committed: s.penalty?.commited ?? null,
        scored: s.penalty?.scored ?? null,
        missed: s.penalty?.missed ?? null,
        saved: s.penalty?.saved ?? null,
      },
      duels: {
        total: s.duels?.total ?? null,
        won: s.duels?.won ?? null,
      },
    }));

    reply.send({
      page,
      per_page: perPage,
      total,
      totalPages: Math.ceil(total / perPage),
      data: players,
    });
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: 'Internal server error' });
  }
};
