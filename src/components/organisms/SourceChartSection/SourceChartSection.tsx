import ChartTitle from "../../atoms/ChartTitle/ChartTitle";
import Error from "../../molecules/Error/Error";
import { useGetSourceChartDataQuery } from "../../../services/api/sourceChartApi";
import SourceChart from "../../atoms/SourceChart/SourceChart";
import { ChartWrapper, WrapperParent, WrapperChild } from "./SourceChartSection.style";

const SourceChartSection = () => {
    const { isError, refetch } = useGetSourceChartDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }

    return (
        <>
            <ChartWrapper>
                <ChartTitle fontSize={ "1.5rem" } margin="0 auto 0.5em auto">Traffic sources:</ChartTitle>
                <WrapperParent>
                    <WrapperChild>
                        <SourceChart/>
                    </WrapperChild>
                </WrapperParent>

            </ChartWrapper>
        </>
    );
};

export default SourceChartSection;