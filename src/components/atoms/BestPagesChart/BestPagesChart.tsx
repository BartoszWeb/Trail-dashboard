import { useRef, useEffect } from "react";
import { ChartWrapper, Chart, Website, Bar, AmountOfUsers } from "./BestPagesChart.style";
import { useGetBestPagesDataQuery } from "../../../services/api/bestPagesChartApi";
import { Loading } from "./BestPagesChart.style";

const skeletonData = [
    {
        "name": "----------------------------------",
        "users": 0,
    },
    { "name": "----------------------------------", "users": 0 },
    {
        "name": "----------------------------------",
        "users": 0,
    },
    { "name": "----------------------------------", "users": 0 },
    {
        "name": "----------------------------------",
        "users": 0,
    },
    { "name": "----------------------------------", "users": 0 },
    {
        "name": "----------------------------------",
        "users": 0,
    },
    { "name": "----------------------------------", "users": 0 },
];

const BestPagesChart = () => {
    const chartSelector = useRef<HTMLDivElement>(null);

    const { data, isFetching } = useGetBestPagesDataQuery();
    const dataToChart = data ? data : skeletonData;

    const calculatedDataToChart = dataToChart.map((item) => {
        const calculateWidth = () => (item.users * 100) / dataToChart[0].users;
        return {
            "name": item.name,
            "users": item.users,
            "width": calculateWidth() > 20 ? calculateWidth() + "%" : "20%",
        };
    });

    useEffect(() => {
        if (isFetching) return;
        if (!data) return;
        if (!chartSelector.current) return;

        const timers = [] as NodeJS.Timeout[];
        Array.from(chartSelector.current.children).forEach((singleItem: any, index) => {
            const timer = setTimeout(() => {
                singleItem.firstChild.style.opacity = "1";
                singleItem.lastChild.style.opacity = "1";
                singleItem.lastChild.style.width = singleItem.dataset.width;
            }, 50 * index);
            timers.push(timer);
        });
        return () => {
            if (timers.length > 0) {
                timers.forEach((timer: any) => {
                    clearTimeout(timer);
                });
            }
        };
    }, [data, isFetching]);


    return (
        <ChartWrapper className={ isFetching ? "loading" : "" } ref={ chartSelector }>
            { isFetching && <Loading>Loading...</Loading> }
            <>
                {
                    calculatedDataToChart.map((singlePage, index) => {
                        return (
                            <Chart data-width={ singlePage.width }
                                   key={ index }>
                                <Website
                                    className={ isFetching ? "loading" : "" }><span>{ index + 1 }.{ " " }</span>{ singlePage.name }
                                </Website>
                                <Bar
                                    className={ isFetching ? "loading" : "" }><AmountOfUsers
                                    className={ isFetching ? "loading" : "" }>{ singlePage.users } views</AmountOfUsers></Bar>
                            </Chart>
                        );
                    })
                }
            </>
        </ChartWrapper>
    );
};

export default BestPagesChart;