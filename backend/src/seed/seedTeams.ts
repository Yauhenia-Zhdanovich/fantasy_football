import fs from 'fs';
import path from 'path';
import { Team } from '../models/Team.ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const seedTeams = async () => {
  try {
    const dirPath = path.join(__dirname, 'teams');
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.json'));

    let total = 0;

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(raw);

      if (!Array.isArray(parsed.response)) {
        console.warn(`⚠️ Skipping ${file}, no valid response array`);
        continue;
      }

      for (const entry of parsed.response) {
        const { team, venue } = entry;
        await Team.updateOne(
          { id: team.id },
          {
            $set: {
              id: team.id,
              name: team.name,
              code: team.code,
              country: team.country,
              founded: team.founded,
              national: team.national,
              logo: team.logo,
              venue: venue,
            },
          },
          { upsert: true }
        );
        total++;
      }
    }

    console.log(`⚽️ Seeded ${total} teams from ${files.length} files`);
  } catch (error) {
    console.error('❌ Error seeding teams:', error);
  }
};
