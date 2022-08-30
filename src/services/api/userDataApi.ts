import { api } from "./api";
import { GetUserDataQuery, User } from "../../generated/graphql";

export const GetUserDataDocument = `
    query getUserData {
        users {
            id
            email
            avatar
            project
        }
    }
`;

interface UserData {
    id: string;
    email: string;
    avatar: string;
    project: string;
}

export const userDataApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserData: builder.query<UserData, void>({
            query: () => ({ document: GetUserDataDocument }),
            transformResponse: (responseData: GetUserDataQuery) => {
                const transformedData = responseData.users[0];
                return transformedData as UserData;
            },
        }),

    }),
});

export const { useGetUserDataQuery } = userDataApi;