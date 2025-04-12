import fs from 'fs';
import path from 'path';
import { Country } from '../models/Country.ts';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const seedCountries = async () => {
  const filePath = path.join(__dirname, 'countries.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.response)) {
    throw new Error('Invalid countries file format');
  }

  for (const country of parsed.response) {
    await Country.updateOne(
      { code: country.code },
      { $set: country },
      { upsert: true }
    );
  }

  console.log(`🌍 Seeded ${parsed.response.length} countries`);
};
