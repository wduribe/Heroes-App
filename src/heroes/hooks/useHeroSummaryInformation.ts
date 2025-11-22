import { useQuery } from "@tanstack/react-query";
import { getSummaryInformationActions } from "../actions/get-summary-information.actions";


export const useHeroSummaryInformation = () => {
    return useQuery({
        queryKey: ['summary-information'],
        queryFn: getSummaryInformationActions,
        staleTime: 1000 * 60 * 5 // 5 minutos para que se refresque el caché
    });
}
