import { api } from "./api";
import { GetUsersTableDataQuery } from "../../generated/graphql";


export const GetAllDataDocument = `
    query getUsersTableData{
        users {
            usersTable {
                all {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
                yesterday {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
                year {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
                week {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
                month {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
                quarter {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
                today {
                    id
                    country
                    device
                    trafficSource
                    firstSession
                    convertedSession
                    browser
                    trails {
                        id
                        url
                        time
                        sessionDate
                    }
                }
            }      
        }
    }

`;

interface Trail {
    id: number;
    url: string;
    time: number;
    sessionDate: number;
}

interface User {
    browser: string;
    convertedSession: number;
    country: string;
    device: string;
    firstSession: number;
    id: number;
    trafficSource: string;
    trails: Trail[];
}

interface UsersTableData {
    all: User[],
    year: User[],
    quarter: User[],
    today: User[],
    yesterday: User[],
    week: User[],
    month: User[],
}

export const usersTableApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsersTableData: builder.query<UsersTableData, void>({
            query: () => ({ document: GetAllDataDocument }),
            transformResponse: (responseData: GetUsersTableDataQuery) => {
                const transformedData = responseData.users[0].usersTable;
                return transformedData as UsersTableData;
            },
        }),
    }),
});

export const { useGetUsersTableDataQuery } = usersTableApi;