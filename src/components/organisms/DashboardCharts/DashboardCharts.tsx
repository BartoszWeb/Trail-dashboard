import UsersChartSection from "../UsersChartSection/UsersChartSection";
import DeviceChartSection from "../DeviceChartSection/DeviceChartSection";
import TimeChartSection from "../TimeChartSection/TimeChartSection";
import GeoChartSection from "../GeoChartSection/GeoChartSection";
import SourceChartSection from "../SourceChartSection/SourceChartSection";
import AverageTimeChartSection from "../AverageTimeChartSection/AverageTimeChartSection";
import { ChartsWrapper, SectionWrapper, TwoChartsWrapper } from "./DashboardCharts.style";

const DashBoardCharts = () => {
    return (
        <ChartsWrapper>
            <UsersChartSection/>
            <SectionWrapper>
                <TimeChartSection/>
                <GeoChartSection/>
                <DeviceChartSection/>
                <TwoChartsWrapper>
                    <AverageTimeChartSection/>
                    <SourceChartSection/>
                </TwoChartsWrapper>
            </SectionWrapper>
        </ChartsWrapper>
    );
};

export default DashBoardCharts;