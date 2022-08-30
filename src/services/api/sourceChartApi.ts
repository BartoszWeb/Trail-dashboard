import { api } from "./api";
import { GetSourceChartDataQuery } from "../../generated/graphql";

export const GetSourceChartDataDocument = `
query getSourceChartData{
    users {
        sourceChart {
          name
          users
        }
    }
}
`;
type ChartData = [
    {
        name: string;
        users: number;
    }
]

export const sourceChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getSourceChartData: builder.query<ChartData, void>({
            query: () => ({ document: GetSourceChartDataDocument }),
            transformResponse: (responseData: GetSourceChartDataQuery) => {
                const transformedData = responseData.users[0].sourceChart;
                return transformedData as ChartData;
            },

        }),
    }),
});

export const { useGetSourceChartDataQuery } = sourceChartApi;