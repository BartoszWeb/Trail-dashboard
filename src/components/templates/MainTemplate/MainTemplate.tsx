import React from "react";
import Navigation from "../../organisms/Navigation/Navigation";
import { useGetUserDataQuery } from "../../../services/api/userDataApi";
import { LoadingWrapper, Loading } from "./MainTemplate.style";
import { NavigationSidebar } from "../../organisms/NavigationSidebar/NavigationSidebar";
import Error from "../../molecules/Error/Error";
import { Content } from "./MainTemplate.style";

type Props = {
    children: React.ReactNode;
}

const MainTemplate = ({ children }: Props) => {
    const { isFetching, isError, refetch } = useGetUserDataQuery();

    if (isFetching) {
        return (
            <LoadingWrapper>
                <Loading>Loading...</Loading>;
            </LoadingWrapper>
        );
    }

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }

    return (
        <>
            <Navigation/>
            <Content>
                <NavigationSidebar/>
                { children }
            </Content>
        </>
    );
};

export default MainTemplate;