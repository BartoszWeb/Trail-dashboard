import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useGetUsersChartDataQuery } from "../../../services/api/usersChartApi";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";
import { theme } from "../../../styles/theme";
import { selectChartTime } from "../../../store/ChartTimeSlice/chartTimeSlice";
import { UsersChartWrapper } from "./UserChart.style";

const skeletonData = [
    { name: ["2019"], users: 0 },
    { name: ["2020"], users: 0 },
    { name: ["2021"], users: 0 },
    { name: ["2022"], users: 0 },
];


const UsersChart = () => {
    const isDark = useAppSelector(selectTheme);
    const timeSelector = useAppSelector(selectChartTime);

    const { data, isSuccess, isFetching } = useGetUsersChartDataQuery();

    const dataToChart = !isFetching && isSuccess ? data[timeSelector] : skeletonData;
    return (
        <UsersChartWrapper className={ isFetching ? "loading" : "" }>
            <ResponsiveContainer>
                <LineChart
                    data={ dataToChart }
                    margin={ {
                        top: 10,
                        right: 0,
                        left: -20,
                        bottom: 0,
                    } }>
                    <CartesianGrid
                        stroke={ isDark ? theme(true).colors.chartColor : theme(false).colors.chartColor }
                        strokeDasharray="3 3"/>
                    <XAxis
                        tick={ { fontSize: window.innerWidth > 350 ? 16 : 13 } }
                        stroke={ isDark ? theme(true).colors.chartColor : theme(false).colors.chartColor }
                        dataKey="name" />
                    <YAxis
                        tick={ { fontSize: window.innerWidth > 350 ? 16 : 13 }}
                        stroke={ isDark ? theme(true).colors.chartColor : theme(false).colors.chartColor }
                    />
                    <Tooltip/>
                    <Line
                        connectNulls
                        type="monotone"
                        dataKey="users"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </LineChart>
            </ResponsiveContainer>
        </UsersChartWrapper>
    );
};

export default UsersChart;