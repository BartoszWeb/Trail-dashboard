import Error from "../../molecules/Error/Error";
import ChartTitle from "../../atoms/ChartTitle/ChartTitle";
import styled from "styled-components";
import { useGetAverageTimeChartDataQuery } from "../../../services/api/averageTimeApi";
import AverageTimeChart from "../../AverageTimeChart/AverageTimeChart";

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  padding: 1em;
  border: 1px dashed #b6b6b6;
  @media (max-width: 15em) {
    padding: 0.2em;
  }
`;

const AverageTimeChartSection = () => {
    const { isError, refetch } = useGetAverageTimeChartDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }
    return (

        <ChartWrapper>
            <ChartTitle fontSize={ "1.5rem" } margin="0 auto 1em auto">Average time to convert [min]:</ChartTitle>
            <AverageTimeChart/>
        </ChartWrapper>
    );
};

export default AverageTimeChartSection;