import { api } from "./api";
import { GetUsersChartDataQuery } from "../../generated/graphql";

export const GetUsersChartDataDocument = `
    query getUserData {
        users {
         usersChart {
            all {
                name
                users
            }
            month {
                name
                users
            }
            year {
                name
                users
            }
            today {
                name
                users
            }
            yesterday {
                name
                users
            }
            quarter {
                name
                users
            }
            week {
                name
                users
            }
        }
        }
    }
`;

interface ChartData {
    all: [
        { name: string[], users: number }
    ],
    quarter: [
        { name: string[], users: number }
    ],
    year: [
        { name: string[], users: number }
    ],
    month: [
        { name: string[], users: number }
    ],
    week: [
        { name: string[], users: number }
    ],
    today: [
        { name: string[], users: number }
    ],
    yesterday: [
        { name: string[], users: number }
    ],
}

export const usersChartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsersChartData: builder.query<ChartData, void>({
            query: () => ({ document: GetUsersChartDataDocument }),
            transformResponse: (responseData: GetUsersChartDataQuery) => {
                const transformedData = responseData.users[0].usersChart;
                return transformedData as ChartData;
            },
        }),

    }),
});

export const { useGetUsersChartDataQuery } = usersChartApi;