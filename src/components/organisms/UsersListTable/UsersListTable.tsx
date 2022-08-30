import { useGetUsersTableDataQuery } from "../../../services/api/usersTableApi";
import { LegacyRef, useRef } from "react";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTableTime } from "../../../store/UsersTableSlice/usersTableSlice";
import { countries } from "./countries";
import { skeletonData } from "./skeletonData";
import UsersTableHeader from "../../molecules/UsersTableHeader/UsersTableHeader";
import { TableWrapper, Loading, Column, TableUser } from "./UsersListTable.style";
import { MouseEvent } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { togglePopUp } from "../../../store/PopUpSlice/popUpSlice";
import UsersTablePopUp from "../UsersTablePopUp/UsersTablePopUp";

const UsersListTable = () => {
    const dispatch = useAppDispatch();

    const timeSelector = useAppSelector(selectTableTime);

    const listWrapper = useRef(null);

    const { data, isFetching } = useGetUsersTableDataQuery();
    const users = data ? data[timeSelector] : skeletonData;

    const cache = useRef(new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,
    }));

    const millisToHumanDate = (milliseconds: number) => {
        if (milliseconds === 0) return "-----";
        const dateObject = new Date(milliseconds);
        return dateObject.toLocaleString();
    };

    function millisToMinutesAndSeconds(millis: number) {
        let minutes = Math.floor(millis / 60000);
        let secondsString = ((millis % 60000) / 1000).toFixed(0);
        let seconds = Number(secondsString);
        if (seconds === 0) return "------";
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(togglePopUp({
            isActive: true,
            id: Number(e.currentTarget.dataset.id),
        }));

    };

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <TableWrapper className={ isFetching ? "loading" : "" }>
                { <div ref={ listWrapper } style={ { width: "100%", height: `calc(100vh - 320px` } }>
                    { isFetching && <Loading>Loading...</Loading> }
                    <UsersTableHeader/>
                    <AutoSizer>
                        {
                            ({ width, height }: any) => (
                                <List
                                    width={ width }
                                    height={ height }
                                    rowHeight={ cache.current.rowHeight }
                                    deferredMeasurementCache={ cache.current }
                                    rowCount={ users.length }
                                    rowRenderer={ ({ key, index, style, parent }) => {
                                        const user = users[index];
                                        const {
                                            id,
                                            firstSession,
                                            convertedSession,
                                            trails,
                                            device,
                                            country,
                                            trafficSource,
                                        } = user;
                                        return (
                                            <CellMeasurer key={ key }
                                                          cache={ cache.current }
                                                          parent={ parent }
                                                          columnIndex={ 0 }
                                                          rowIndex={ index }
                                            >
                                                { ({ registerChild }: { registerChild: LegacyRef<HTMLLIElement> }) => (
                                                    <li ref={ registerChild } style={ style }>
                                                        <TableUser className={ isFetching ? "loading" : "" }
                                                                   data-id={ id }
                                                                   onClick={ (e) => handleClick(e) }>
                                                            <Column className={ isFetching ? "loading" : "" }>User
                                                                nr: </Column><span>{ index += 1 }</span>
                                                            <Column
                                                                className={ isFetching ? "loading" : "" }>ID: </Column><span>{ id }</span>
                                                            <Column className={ isFetching ? "loading" : "" }>First
                                                                Session: </Column><span>{ millisToHumanDate(firstSession) }</span>
                                                            <Column className={ isFetching ? "loading" : "" }>Converted
                                                                session: </Column><span>{ millisToHumanDate(convertedSession) }</span>
                                                            <Column className={ isFetching ? "loading" : "" }>Overall
                                                                time
                                                                to convert
                                                                [min]: </Column><span>{ millisToMinutesAndSeconds(trails.reduce((acc: number, trail: { id: number, url: string, sessionDate: number, time: number }) => acc += trail.time, 0)) }</span>
                                                            <Column className={ isFetching ? "loading" : "" }>Device
                                                                during
                                                                session: </Column><span>{ capitalizeFirstLetter(device) }</span>
                                                            <Column
                                                                className={ isFetching ? "loading" : "" }>Country: </Column><span>{ country ? (countries as any)[country] : "-----" }</span>
                                                            <Column className={ isFetching ? "loading" : "" }>Traffic
                                                                source: </Column><span>{ trafficSource }</span>
                                                        </TableUser>
                                                    </li>
                                                ) }
                                            </CellMeasurer>
                                        );
                                    } }
                                />
                            )
                        }
                    </AutoSizer>
                </div>
                }
            </TableWrapper>
            <UsersTablePopUp/>
        </>
    );
};

export default UsersListTable;