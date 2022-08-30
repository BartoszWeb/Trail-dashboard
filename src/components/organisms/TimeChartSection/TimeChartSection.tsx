import { TimeChart } from "../../atoms/TimeChart/TimeChart";
import styled from "styled-components";
import ChartTitle from "../../atoms/ChartTitle/ChartTitle";
import Error from "../../molecules/Error/Error";
import { useGetTimeChartDataQuery } from "../../../services/api/timeChartApi";

export const ChartWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1em;
  overflow-x: hidden;
  border: 1px dashed #b6b6b6;
  @media (max-width: 15em) {
    padding: 0.2em;
  }
`;

const TimeChartSection = () => {
    const { isError, refetch } = useGetTimeChartDataQuery();

    if (isError) {
        return (
            <Error refetch={ refetch }/>
        );
    }

    return (
        <>
            <ChartWrapper>
                <ChartTitle fontSize={ "1.5rem" } margin="0 auto 1em auto">Conversion time:</ChartTitle>
                <TimeChart/>
            </ChartWrapper>
        </>
    );
};

export default TimeChartSection;