import ChartTitle from "../../atoms/ChartTitle/ChartTitle";
import DeviceChart from "../../atoms/DeviceChart/DeviceChart";
import { useGetDeviceChartDataQuery } from "../../../services/api/deviceChartApi";
import { ChartWrapper, WrapperParent, WrapperChild } from "./DeviceChartSection.style";
import Error from "../../molecules/Error/Error";

const DeviceChartSection = () => {
    const { data, isError, refetch } = useGetDeviceChartDataQuery();

    const countUsers = () => {
        if (!data) return null;
        return data.reduce((prevValue: number, currentValue: { name: string, value: number }) => prevValue + currentValue.value, 0);
    };
    const amountOfUsers = countUsers();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }
    return (
        <ChartWrapper>
            <ChartTitle fontSize={ "1.5rem" } margin="0 auto 0.5em auto">Device during conversion:</ChartTitle>
            <ChartTitle fontSize={ "1.2rem" }
                        margin="0 auto 0.2em auto">{ data ? `Users: ${ amountOfUsers }` : "Users:" }</ChartTitle>
            <WrapperParent>
                <WrapperChild>
                    <DeviceChart/>
                </WrapperChild>
            </WrapperParent>
        </ChartWrapper>
    );
};

export default DeviceChartSection;