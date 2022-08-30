import { api } from "./api";
import { GetTimeChartDataQuery } from "../../generated/graphql";

export const GetTimeChartDataDocument = `
query getTimeChartData{
    users {
        timeChart {
            sunday {
                hour
                value
            }
            monday {
                hour
                value
            }
            tuesday {
                hour
                value
            }
            wednesday {
                hour
                value
            }
            thursday {
                hour
                value
            }
            friday {
                hour
                value
            }
            saturday {
                hour
                value
            }
        }
    }
}
`;

interface DataToChart {
    hour: string,
    value: number
    index: number
}

export interface TimeChartData {
    sunday: DataToChart[];
    monday: DataToChart[];
    tuesday: DataToChart[];
    wednesday: DataToChart[];
    thursday: DataToChart[];
    friday: DataToChart[];
    saturday: DataToChart[];
}

export const timeChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTimeChartData: builder.query<TimeChartData, void>({
            query: () => ({ document: GetTimeChartDataDocument }),
            transformResponse: (responseData: GetTimeChartDataQuery) => {
                const transformedData = responseData.users[0].timeChart;
                return transformedData as TimeChartData;
            },
        }),
    }),
});

export const { useGetTimeChartDataQuery } = timeChartApi;