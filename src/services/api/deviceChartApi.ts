import { api } from "./api";
import { GetDeviceChartDataQuery } from "../../generated/graphql";

export const GetDeviceChartDataDocument = `
    query getDeviceChartData{
    users {
        deviceChart {
            name
            value
        }
    }
}
`;
type ChartData = [
    {
        name: string;
        value: number;
    }
]

export const deviceChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDeviceChartData: builder.query<ChartData, void>({
            query: () => ({ document: GetDeviceChartDataDocument }),
            transformResponse: (responseData: GetDeviceChartDataQuery) => {
                const transformedData = responseData.users[0].deviceChart;
                return transformedData as ChartData;
            },

        }),
    }),
});

export const { useGetDeviceChartDataQuery } = deviceChartApi;