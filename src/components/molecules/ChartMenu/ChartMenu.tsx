import { MouseEvent, useEffect, useRef } from "react";
import { ChartNavigationWrapper, ChartNavigation } from "./ChartMenu.style";
import { ButtonChartMenu } from "../../atoms/ButtonMenuChart/ButtonMenuChart";
import { useGetUsersChartDataQuery } from "../../../services/api/usersChartApi";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { selectChartTime, updateTime } from "../../../store/ChartTimeSlice/chartTimeSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";


const ChartMenu = () => {
    const dispatch = useAppDispatch();
    const navSelector = useRef<HTMLUListElement>(null);
    const timeSelector = useAppSelector(selectChartTime);
    const { isFetching } = useGetUsersChartDataQuery();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        addButtonActiveClass(e);
        updateTitle(e);
    };
    const addButtonActiveClass = (e: MouseEvent<HTMLButtonElement>) => {
        if (!navSelector.current) return;
        Array.from(navSelector.current?.children).forEach((element) => {
            (element.childNodes[0] as HTMLButtonElement).classList.remove("active");
        });
        (e.target as HTMLButtonElement).classList.add("active");
    };

    const updateTitle = (e: MouseEvent<HTMLButtonElement>) => {
        const time = (e.target as HTMLButtonElement).textContent?.toLowerCase();
        dispatch(updateTime(time));

    };
    useEffect(() => {
        if (!navSelector.current) return;
        Array.from(navSelector.current?.children).forEach(element => {
            if ((element.childNodes[0] as HTMLButtonElement).textContent?.toLowerCase() === timeSelector) {
                (element.childNodes[0] as HTMLButtonElement).classList.add("active");
            }
        });
    });
    return (
        <ChartNavigationWrapper>
            <ChartNavigation className={ isFetching ? "loading" : "" }>
                <ul ref={ navSelector }>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>All</ButtonChartMenu>
                    </li>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>Today</ButtonChartMenu>
                    </li>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>Yesterday</ButtonChartMenu>
                    </li>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>Week</ButtonChartMenu></li>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>Month</ButtonChartMenu>
                    </li>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>Quarter</ButtonChartMenu>
                    </li>
                    <li><ButtonChartMenu disabled={ !!isFetching }
                                         onClick={ (e) => handleClick(e) }>Year</ButtonChartMenu></li>
                </ul>
            </ChartNavigation>
        </ChartNavigationWrapper>
    );
};

export default ChartMenu;