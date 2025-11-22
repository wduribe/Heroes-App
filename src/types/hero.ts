import * as z from "zod";

export const StatusSchema = z.enum(["Active", "Retired", "Deceased", "Unknown"]);
export const CategorySchema = z.enum(["Hero", "Villain", "Anti-Hero"]);
export const UniverseSchema = z.enum(["Marvel", "DC", "Other"]);

//* Schema para Heroes
export const HeroSchema = z.object({
  id: z.string(),
  name: z.string(),
  alias: z.string(),
  slug: z.string(),
  powers: z.array(z.string()),
  description: z.string(),
  strength: z.number(),
  intelligence: z.number(),
  speed: z.number(),
  durability: z.number(),
  team: z.string(),
  image: z.string(),
  firstAppearance: z.string(),
  status: StatusSchema,
  category: CategorySchema,
  universe: UniverseSchema,
});

//* Schemas para peticiones http
export const GetHeroReponseSchema = z.object({
  total: z.number(),
  pages: z.number(),
  heroes: z.array(HeroSchema),
});

export const GetSummaryInformationResponseSchema = z.object({
  totalHeroes: z.number(),
  strongestHero: HeroSchema,
  smartestHero: HeroSchema,
  heroCount: z.number(),
  villainCount: z.number(),
});


//*Schema favorites localstorage
export const FavoritesHeroesSchema = z.array(HeroSchema);

export type Hero = z.infer<typeof HeroSchema>;
