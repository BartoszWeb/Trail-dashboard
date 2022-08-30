import { useGetUsersChartDataQuery } from "../../../services/api/usersChartApi";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectChartTime } from "../../../store/ChartTimeSlice/chartTimeSlice";
import ChartTitle from "../../atoms/ChartTitle/ChartTitle";
import ChartMenu from "../../molecules/ChartMenu/ChartMenu";
import UsersChart from "../../atoms/UsersChart/UsersChart";
import { chartTime } from "../../atoms/UsersChart/CalculateTitle";
import Error from "../../molecules/Error/Error";
import { ChartWrapper, WrapperParent, WrapperChild } from "./UsersChartSection.style";

const UsersChartSection = () => {
    const timeSelector = useAppSelector(selectChartTime);
    const chartTitle = chartTime(timeSelector);

    const { isError, refetch } = useGetUsersChartDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }
    return (
        <ChartWrapper>
            <ChartTitle fontSize={ "1.5rem" } margin="0 auto 1em auto">Amount of converted users:</ChartTitle>
            <ChartMenu/>
            <ChartTitle fontSize={ "1.1rem" } margin="0 auto 1em auto">{ chartTitle }</ChartTitle>
            <WrapperParent>
                <WrapperChild>
                    <UsersChart/>
                </WrapperChild>
            </WrapperParent>
        </ChartWrapper>
    );
};

export default UsersChartSection;