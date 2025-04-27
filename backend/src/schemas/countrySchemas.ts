import { z } from 'zod';
import 'zod-openapi/extend';

export const CountrySchema = z.object({
  name: z.string(),
  code: z.string(),
  flag: z.string().url(),
}).openapi({ title: 'Country' });

export const GetCountriesResponseSchema = z.array(CountrySchema).openapi({
  title: 'GetCountriesResponse',
  description: 'List of all available countries',
});

export type CountryType = z.infer<typeof CountrySchema>;
export type GetCountriesResponse = z.infer<typeof GetCountriesResponseSchema>;
