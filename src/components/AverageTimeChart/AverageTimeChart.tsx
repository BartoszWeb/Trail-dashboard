import React from "react";
import { useGetAverageTimeChartDataQuery } from "../../services/api/averageTimeApi";
import { Box } from "./AverageTimeChart.style";

const AverageTimeChart = () => {
    const { data, isFetching } = useGetAverageTimeChartDataQuery();
    const chartData = data ? data : "Loading...";

    return (
        <Box className={ isFetching ? "loading" : "" }>
            { chartData }
        </Box>
    );
};

export default AverageTimeChart;