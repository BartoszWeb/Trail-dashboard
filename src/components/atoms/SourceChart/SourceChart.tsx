import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { useGetSourceChartDataQuery } from "../../../services/api/sourceChartApi";
import { ChartWrapper } from "./SourceChart.style";
import { theme } from "../../../styles/theme";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";

const skeletonData = [
    {
        name: "Direct",
        users: 0,
    },
    {
        name: "Organic",
        users: 0,
    },
    {
        name: "Social",
        users: 0,
    },
    {
        name: "Referral",
        users: 0,
    },
    {
        name: "Other",
        users: 0,
    },
];

const SourceChart = () => {
    const isDark = useAppSelector(selectTheme);
    const { data, isFetching } = useGetSourceChartDataQuery();

    const dataToChart = data ? data : skeletonData;
    return (
        <ChartWrapper className={ isFetching ? "loading" : "" }>
            <ResponsiveContainer>
                <ComposedChart
                    data={ dataToChart }
                    margin={ {
                        top: 20,
                        left: -20,
                    } }
                >
                    <CartesianGrid
                        stroke={ isDark && !isFetching ? theme(true).colors.chartColor : theme(false).colors.chartColor }
                        strokeDasharray="3 3"/>
                    <XAxis stroke={ isDark ? theme(true).colors.chartColor : theme(false).colors.chartColor }
                           dataKey="name"/>
                    <YAxis stroke={ isDark ? theme(true).colors.chartColor : theme(false).colors.chartColor }
                           tick={ { fontSize: window.innerWidth > 350 ? 16 : 13 } }/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="users" barSize={ window.innerWidth > 350 ? 50 : 25 } fill="#413ea0"/>
                </ComposedChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
};

export default SourceChart;