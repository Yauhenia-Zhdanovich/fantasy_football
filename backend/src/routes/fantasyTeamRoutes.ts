import { FastifyInstance } from 'fastify';
import { CreateFantasyTeamSchema } from '../schemas/fantasyTeamSchemas.ts';
import { zodToJsonSchema } from 'zod-to-json-schema';
import mongoose from 'mongoose';
import { League } from '../models/League.ts';
import { PlayerStat } from '../models/PlayerStat.ts';
import { FantasyTeam, IFantasyTeam } from '../models/FantasyTeam.ts';
import { z } from 'zod';
import { VALID_LINEUPS } from '../schemas/ligneupSchema.ts';

export default async function fantasyTeamRoutes(fastify: FastifyInstance) {
  fastify.post('/fantasy-teams', {
    schema: {
      tags: ['FantasyTeam'],
      summary: 'Create a new fantasy team',
      description: 'Publishes a fantasy team for the logged-in user',
      body: zodToJsonSchema(CreateFantasyTeamSchema, { target: 'openApi3' }),
      response: {
        201: {
          description: 'Team created',
          type: 'object',
          properties: {
            message: { type: 'string' },
            teamId: { type: 'string' },
          },
        },
        400: {
          description: 'Validation error',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    handler: async (request, reply) => {
      const user = request.user as { _id: mongoose.Types.ObjectId };
      const body = request.body as z.infer<typeof CreateFantasyTeamSchema>;

      let league;

      if (mongoose.isValidObjectId(body.competition)) {
        league = await League.findById(body.competition);
      } else {
        league = await League.findOne({ id: parseInt(body.competition) });
      }

      if (!league || league.country?.code !== body.country) {
        return reply.status(400).send({ error: 'Competition does not match country' });
      }

      const playerStats = await PlayerStat.find({
        player: { $in: body.players },
        league: league._id,
      });

      if (playerStats.length !== body.players.length) {
        return reply.status(400).send({ error: 'Some players do not match the competition' });
      }

      const positionCounts = { gk: 0, def: 0, mid: 0, fwd: 0 };
      for (const stat of playerStats) {
        const pos = stat.games?.position?.toLowerCase();
        if (pos?.includes('goalkeeper')) positionCounts.gk++;
        else if (pos?.includes('defender')) positionCounts.def++;
        else if (pos?.includes('midfielder')) positionCounts.mid++;
        else if (pos?.includes('attacker') || pos?.includes('forward')) positionCounts.fwd++;
      }

      const expected = VALID_LINEUPS[body.lineup];
      const matchesLineup = JSON.stringify(positionCounts) === JSON.stringify(expected);

      if (!matchesLineup) {
        return reply.status(400).send({ error: 'Players do not match selected lineup' });
      }

      const fantasyTeam = (await FantasyTeam.create({
        name: body.name,
        country: body.country,
        competition: body.competition,
        user: new mongoose.Types.ObjectId(user._id),
        players: body.players,
        lineup: {
          name: body.lineup,
          formation: expected,
        },
      })) as IFantasyTeam & { _id: mongoose.Types.ObjectId };

      return reply.status(201).send({
        message: 'Fantasy team created successfully',
        teamId: fantasyTeam._id.toString(),
      });
    }
  });
}
