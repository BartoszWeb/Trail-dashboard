import { api } from "./api";
import { GetGeoChartDataQuery } from "../../generated/graphql";

export const GetGeoChartDataDocument = `
  query getGeoChartData{
    users {
        geoChart {
            v
            fullName
            value
        }
    }
}
`;
type ChartData = [
    {
        v: string;
        fullName: string;
        value: number;
    }
]

export const geoChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getGeoChartData: builder.query<ChartData, void>({
            query: () => ({ document: GetGeoChartDataDocument }),
            transformResponse: (responseData: GetGeoChartDataQuery) => {
                const transformedData = responseData.users[0].geoChart;
                return transformedData as ChartData;
            },

        }),
    }),
});

export const { useGetGeoChartDataQuery } = geoChartApi;