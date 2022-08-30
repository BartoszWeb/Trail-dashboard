import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useGetDeviceChartDataQuery } from "../../../services/api/deviceChartApi";
import { DeviceChartWrapper } from "./DeviceChart.style";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";

const skeletonData = [
    {
        "name": "",
        "value": 100,
    },
    {
        "name": "",
        "value": 0,
    },
    {
        "name": "",
        "value": 0,
    },
];
const COLORS = ["#d5b000", "#7a7a7a", "#4843d1"];
const RADIAN = Math.PI / 180;

interface LabelProps {
    cx: number,
    cy: number,
    midAngle: number,
    innerRadius: number,
    outerRadius: number,
    percent: number
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: LabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={ x } y={ y } fill="white" textAnchor={ x > cx ? "start" : "end" } dominantBaseline="central">
            { `${ (percent * 100).toFixed(0) }%` }
        </text>
    );
};


const DeviceChart = () => {
    const isDark = useAppSelector(selectTheme);
    const { data, isFetching, isSuccess } = useGetDeviceChartDataQuery();
    const dataToChart = !isFetching && isSuccess && data ? data : skeletonData;
    return (
        <DeviceChartWrapper className={ isFetching ? "loading" : "" }>
            <ResponsiveContainer>
                <PieChart margin={ { top: -0, right: 0, bottom: 0, left: 0 } }>
                    <Pie
                        data={ dataToChart }
                        cx="50%"
                        cy="50%"
                        labelLine={ false }
                        label={ !isFetching && renderCustomizedLabel }
                        outerRadius="90%"
                        stroke={ isFetching && isDark ? "#252525FF" : "#FFF" }
                        fill={ isDark ? "#252525FF" : "#FFF" }
                        dataKey="value"
                        isAnimationActive={ !isFetching }
                    >
                        {
                            data && data.map((_: any, index: number) => (
                                <Cell key={ `cell-${ index }` } fill={ COLORS[index % COLORS.length] }/>
                            ))
                        }
                    </Pie>
                    <Legend/>

                </PieChart>
            </ResponsiveContainer>
        </DeviceChartWrapper>
    );
};

export default DeviceChart;