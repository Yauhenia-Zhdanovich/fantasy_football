import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { League } from '../models/League.ts';
import { Team } from '../models/Team.ts';
import { Season } from '../models/Season.ts';
import { TeamStat } from '../models/TeamStat.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const seedTeamStats = async () => {
  const dirPath = path.join(__dirname, 'stats');
  const files = fs.readdirSync(dirPath).filter(name => name.endsWith('.json'));

  let total = 0;

  for (const file of files) {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const parsed = JSON.parse(raw);
    const stats = parsed.response;

    if (!Array.isArray(stats)) continue;

    for (const entry of stats) {
      const { league, team, form, goals, fixtures } = entry;

      const leagueDoc = await League.findOne({ id: league.id });
      const seasonDoc = await Season.findOne({ year: league.season });
      const teamDoc = await Team.findOne({ id: team.id });

      if (!leagueDoc || !seasonDoc || !teamDoc) {
        console.warn('⚠️ Skipping stat due to missing data', {
          league: !!leagueDoc,
          season: !!seasonDoc,
          team: !!teamDoc,
        });
        continue;
      }

      const exists = await TeamStat.exists({
        league: leagueDoc._id,
        season: seasonDoc._id,
        team: teamDoc._id,
      });

      if (!exists) {
        await TeamStat.create({
          league: leagueDoc._id,
          season: seasonDoc._id,
          team: teamDoc._id,
          form,
          goals,
          fixtures,
        });
        total++;
      }
    }
  }

  console.log(`✅ Done seeding team stats: ${total}`);
};