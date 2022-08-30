import { Chart } from "react-google-charts";
import { useGetGeoChartDataQuery } from "../../../services/api/geoChartApi";
import { GeoChartWrapper } from "./GeoChart.style";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";
import { theme } from "../../../styles/theme";

type AccType = [string, string] |
    [
        {
            v: string;
            f: string;
        },
        number
    ]

type ConvertDataResult = Array<AccType>

export const skeletonData = [
    ["Country", "Popularity"],
];

const GeoChart = () => {
    const isDark = useAppSelector(selectTheme);
    const { data, isFetching } = useGetGeoChartDataQuery();
    const options = {
        backgroundColor: "transparent",
        datalessRegionColor: data ? "rgba(0,0, 25, 1)" : theme(isDark).colors.navColor,
        colorAxis: { colors: ["#ffec99", "#edc026"] },
        legend: window.innerWidth > 500 ? {
            textStyle: {
                color: "white",
                fontSize: window.innerWidth > 550 ? 16 : 8,
                bold: false,
                stroke: "#000",
            },
        } : "none",
    };

    const convertData = (): ConvertDataResult | undefined => {
        if (!data) return undefined;
        return data.reduce((acc: Array<AccType>, value) => {
            return [...acc, [{ v: value.v, f: value.fullName }, value.value]];
        }, [["Country", "Users"]]);
    };
    const convertedData = convertData();

    const dataToChart = data ? convertedData : skeletonData;

    return (
        <GeoChartWrapper className={ isFetching && !convertedData ? "loading" : "" }>
            <Chart
                chartType="GeoChart"
                data={ dataToChart }
                height="100%"
                options={ options }
            />
        </GeoChartWrapper>
    );
};

export default GeoChart;