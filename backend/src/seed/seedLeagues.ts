import fs from 'fs';
import path from 'path';
import { League } from '../models/League.ts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const seedLeagues = async () => {
  const filePath = path.join(__dirname, 'leagues.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.response)) {
    throw new Error('Invalid leagues file format');
  }

  for (const entry of parsed.response) {
    const { league, country, seasons } = entry;

    await League.updateOne(
      { id: league.id, 'country.code': country.code },

      {
        $set: {
          id: league.id,
          name: league.name,
          type: league.type,
          logo: league.logo,
          country: {
            name: country.name,
            code: country.code,
            flag: country.flag,
          },
          seasons: seasons.map((season: any) => ({
            year: season.year,
            start: season.start,
            end: season.end,
            current: season.current,
            coverage: season.coverage,
          })),
        },
      },
      { upsert: true }
    );
  }

  console.log(`🏆 Seeded ${parsed.response.length} leagues`);
};
