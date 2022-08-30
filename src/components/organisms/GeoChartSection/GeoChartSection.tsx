import { ChartWrapper, WrapperParent, WrapperChild } from "./GeoChartSection.style";
import ChartTitle from "../../atoms/ChartTitle/ChartTitle";
import GeoChart from "../../atoms/GeoChart/GeoChart";
import Error from "../../molecules/Error/Error";
import { useGetGeoChartDataQuery } from "../../../services/api/geoChartApi";

const GeoChartSection = () => {
    const { isError, refetch } = useGetGeoChartDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }
    return (
        <ChartWrapper>
            <ChartTitle fontSize={ "1.5rem" } margin="0 auto 0 auto">Conversion locations:</ChartTitle>
            <WrapperParent>
                <WrapperChild>
                    <GeoChart/>
                </WrapperChild>
            </WrapperParent>
        </ChartWrapper>
    );
};

export default GeoChartSection;