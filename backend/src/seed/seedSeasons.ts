import { League } from '../models/League.ts';
import { Season } from '../models/Season.ts';

export const seedSeasons = async () => {
  const leagues = await League.find();
  let total = 0;

  for (const league of leagues) {
    for (const season of league.seasons) {
      const exists = await Season.exists({ year: season.year });

      if (!exists) {
        await Season.create({
          year: season.year,
          start: season.start,
          end: season.end,
          current: season.current,
        });
        console.log(`📅 Seeded season ${season.year}`);
        total++;
      }
    }
  }

  console.log(`✅ Done seeding ${total} seasons`);
};
