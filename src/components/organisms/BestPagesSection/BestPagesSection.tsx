import { useGetAverageTimeChartDataQuery } from "../../../services/api/averageTimeApi";
import Error from "../../molecules/Error/Error";
import BestPagesChart from "../../atoms/BestPagesChart/BestPagesChart";
import styled from "styled-components";

const BestPagesWrapper = styled.div`
  display: grid;
  align-items: start;
`;

const BestPagesChartSection = () => {
    const { isError, refetch } = useGetAverageTimeChartDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }

    return (
        <BestPagesWrapper>
            <BestPagesChart/>
        </BestPagesWrapper>
    );
};

export default BestPagesChartSection;