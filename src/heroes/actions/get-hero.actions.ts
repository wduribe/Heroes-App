import { heroesApi } from "../api/heroesApi";
import { HeroSchema } from "@/types/hero";
import { isAxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroActions = async (idSlug: string) => {
    try {

        const { data } = await heroesApi.get(`/${idSlug}`);
        const response = HeroSchema.safeParse(data);

        if (response.success) {
            return {
                ...response.data,
                image: `${BASE_URL}/images/${response.data.image}`,
            }
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
