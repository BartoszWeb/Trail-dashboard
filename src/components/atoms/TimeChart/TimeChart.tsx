import { useGetTimeChartDataQuery } from "../../../services/api/timeChartApi";
import { TimeChartWrapper } from "./TimeChart.style";
import { HeatMapGrid } from "./TimeChart.style";
import { skeletonData } from "./SkeletonData";
import { Cell, ToolTip, Label, Legend, Col } from "./TimeChart.style";
import { theme } from "../../../styles/theme";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";

const dayLabels = {
    sunday: "Su",
    monday: "Mon",
    tuesday: "Tu",
    wednesday: "Wed",
    thursday: "Th",
    friday: "Fr",
    saturday: "Sat",
};

const yAxisLabels = [
    "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
];

export const TimeChart = () => {
    const isDark = useAppSelector(selectTheme);

    const { data, isSuccess, isFetching } = useGetTimeChartDataQuery();

    const dataToChart = !isFetching && isSuccess && data ? data : skeletonData;

    const result = [] as number[];

    (Object.keys(dataToChart) as Array<keyof typeof dataToChart>).map((day) => {
        dataToChart[day].map((value) => {
            return result.push(value.value);
        });
    });

    const minValue = Math.min(...result);
    const maxValue = Math.max(...result);

    const generateBackgroundColor = (count: number) => {
        return `hsl(220deg 66% ${ count > 0 ? 100 - count * 1.4 : 95 }%)`;
    };

    const minColor = generateBackgroundColor(minValue);
    const maxColor = generateBackgroundColor(maxValue);

    const firstLetterUpperCase = (string: string) => {
        return string[0].toUpperCase() + string.substring(1);
    };

    return (
        <TimeChartWrapper className={ isFetching ? "loading" : "" }>
            <HeatMapGrid>
                { (Object.keys(dataToChart) as Array<keyof typeof dataToChart>).map((day) => (
                    <Col key={ day }>
                        {
                            (dataToChart)[day].map(({ hour, value }: { hour: string, value: number }) => (
                                <Cell
                                    key={ hour }
                                    className={ day === "sunday" || day === "monday" || day === "tuesday" || day === "wednesday" ? "cell cellLeft" : "cell cellRight" }
                                    style={ {
                                        transition: "background 0.5s",
                                        transitionTimingFunction: "ease",
                                        backgroundColor: isFetching ? theme(isDark).colors.loadingColor : generateBackgroundColor(value),
                                    } }
                                >
                                    <ToolTip
                                        className={ day === "sunday" || day === "monday" || day === "tuesday" || day === "wednesday" ? "tooltipLeft" : "tooltipRight" }
                                        role="tooltip">
                                        <span className="count">Users: { value }</span>
                                        <span>{ firstLetterUpperCase(day) } { hour }:00</span>
                                    </ToolTip>
                                </Cell>
                            )) }
                        <Label className={ isFetching ? "loading" : "" }>{ dayLabels[day] }</Label>
                    </Col>
                )) }
                <Col>
                    { yAxisLabels.map((label, index) => (
                        <Label key={ label }>
                            { index % 2 === 0 ? label : null }
                        </Label>
                    )) }
                </Col>
            </HeatMapGrid>
            <Legend>
                <div
                    className="cell"
                    style={ {
                        background: isFetching ? "#353535" : `linear-gradient(90deg, ${ minColor } 0%, ${ maxColor } 100%)`,
                    } }
                />
                <div className="labels">
                    <Label>{ minValue }</Label>
                    <Label>{ maxValue }</Label>
                </div>
            </Legend>
        </TimeChartWrapper>
    );
};