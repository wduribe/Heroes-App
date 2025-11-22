import { isAxiosError } from "axios";
import { heroesApi } from "../api/heroesApi";
import { GetSummaryInformationResponseSchema } from "@/types/hero";

export const getSummaryInformationActions = async () => {
    try {
        const { data } = await heroesApi.get('/summary');

        const response = GetSummaryInformationResponseSchema.safeParse(data);
        
        if (response.success) {
            return response.data;
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }



}
