import { api } from "./api";
import { GetAverageChartDataQuery} from "../../generated/graphql";

export const GetAverageTimeChartDataDocument = `
query getAverageChartData{
    users {
        averageTimeChart
    }
}
`;

export const averageTimeChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAverageTimeChartData: builder.query<string, void>({
            query: () => ({ document: GetAverageTimeChartDataDocument }),
            transformResponse: (responseData: GetAverageChartDataQuery) => {
                const transformedData = responseData.users[0].averageTimeChart;
                return transformedData as string;
            },

        }),
    }),
});

export const { useGetAverageTimeChartDataQuery } = averageTimeChartApi;