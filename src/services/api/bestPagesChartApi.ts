import { api } from "./api";
import { GetBestPagesChartDataQuery } from "../../generated/graphql";

export const GetBestPagesChartDataDocument = `
query getBestPagesChartData{
    users {
        bestPages {
            name
            users
        }
    }
}
`;

interface BestPagesData {
    name: string;
    users: number;
}


export const bestPagesChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBestPagesData: builder.query<BestPagesData[], void>({
            query: () => ({ document: GetBestPagesChartDataDocument }),
            transformResponse: (responseData: GetBestPagesChartDataQuery) => {
                const transformedData = responseData.users[0].bestPages;
                return transformedData;
            },

        }),
    }),
});

export const { useGetBestPagesDataQuery } = bestPagesChartApi;