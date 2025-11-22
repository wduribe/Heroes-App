import { isAxiosError } from "axios";
import { heroesApi } from "../api/heroesApi";
import { GetHeroReponseSchema } from "@/types/hero";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (page: number, limit: number, category: string) => {

    if (isNaN(page)) {
        page = 1;
    }

    if (isNaN(limit) || limit === 0) {
        limit = 6;
    }

    try {
        const { data } = await heroesApi.get('/', {
            params: {
                limit,
                offset: (page - 1) * limit,
                category,
            }
        });

        const response = GetHeroReponseSchema.safeParse(data);

        if (response.success) {
            const heroes = response.data.heroes.map(hero => {
                return {
                    ...hero,
                    image: `${BASE_URL}/images/${hero.image}`,
                }
            });

            return {
                ...response.data,
                heroes
            };
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }


} 