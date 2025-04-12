import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Player } from '../models/Player.ts';
import { Team } from '../models/Team.ts';
import { League } from '../models/League.ts';
import { Season } from '../models/Season.ts';
import { PlayerStat } from '../models/PlayerStat.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const seedPlayers = async () => {
  const dirPath = path.join(__dirname, 'players');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const json = JSON.parse(raw);

    const seasonYear = parseInt(json.parameters.season);
    const teamId = parseInt(json.parameters.team);
    const leagueId = parseInt(json.parameters.league);

    const season = await Season.findOne({ year: seasonYear });
    const team = await Team.findOne({ id: teamId });
    const league = await League.findOne({ id: leagueId });

    if (!season || !team || !league) {
      console.warn(`Skipping file ${file} – missing refs`);
      continue;
    }

    for (const entry of json.response) {
      const p = entry.player;
      let playerDoc = await Player.findOne({ playerId: p.id });
      if (!playerDoc) {
        playerDoc = await Player.create({
          playerId: p.id,
          name: p.name,
          firstname: p.firstname,
          lastname: p.lastname,
          age: p.age,
          nationality: p.nationality,
          height: p.height,
          weight: p.weight,
          photo: p.photo,
          birth: p.birth
        });
      }

      for (const stat of entry.statistics) {
        await PlayerStat.create({
          player: playerDoc._id,
          team: team._id,
          league: league._id,
          season: season._id,
          games: stat.games,
          goals: stat.goals,
          passes: stat.passes,
          cards: stat.cards,
          penalty: stat.penalty,
          duels: stat.duels
        });
      }
    }
  }

  console.log('✅ Seeded player data');
};

