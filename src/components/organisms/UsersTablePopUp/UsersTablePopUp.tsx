import React, { useEffect } from "react";
import { selectPopUp, togglePopUp } from "../../../store/PopUpSlice/popUpSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
    PopUpWrapper,
    WrapperColumns,
    LeftColumn,
    BoxesWrapper,
    SingleBoxWrapper,
    RightColumn,
} from "./UsersTablePopUp.style";
import { ParagraphPopUp } from "../../atoms/ParagrpagPopUp/ParagraphPopUp";
import { CloseButton } from "../../atoms/CloseButton/CloseButton";
import { BoxPopUp } from "../../atoms/BoxPopUp/BoxPopUp";
import { TitlePopUp } from "../../atoms/TitlePopUp/TitlePopUp";
import { NumberOfBoxPopUp } from "../../atoms/NumberOfBoxPopUp/NumberOfBoxPopUp";
import { ParagraphPopUpBox } from "../../atoms/ParagraphPopUpBox/ParagraphPopUpBox";
import { VisitInfoBoxPopUp } from "../../atoms/VisitInfoBoxPopUp/VisitInfoBoxPopUp";
import { TimeInfoBoxPopUp } from "../../atoms/TimeInfoBoxPopUp/TimeInfoBoxPopUp";
import { ArrowNextStep } from "../../atoms/ArrowNextStep/ArrowNextStep";

import { useGetUsersTableDataQuery } from "../../../services/api/usersTableApi";
import { selectTableTime } from "../../../store/UsersTableSlice/usersTableSlice";
import { SuccessIcon } from "../../atoms/SuccessIcon/SuccessIcon";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const UsersTablePopUpP = () => {
    const dispatch = useAppDispatch();
    const timeSelector = useAppSelector(selectTableTime);

    const { id, isActive } = useAppSelector(selectPopUp);

    const handleKey = (e: KeyboardEvent) => {
        console.log("pyk");
        if (e.key !== "Escape") return;

        dispatch(togglePopUp({
            isActive: false,
            id: null,
        }));

    };
    useEffect(() => {
        if (!isActive) return;
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isActive]);


    const { data } = useGetUsersTableDataQuery();
    if (!data) return null;

    const user = data[timeSelector].find((user) => {
        return user.id === Number(id);
    });

    const millisToHumanDate = (milliseconds: number) => {
        if (milliseconds === 0) return "-----";
        const dateObject = new Date(milliseconds);
        return dateObject.toLocaleString();
    };

    function millisToMinutesAndSeconds(millis: number | undefined) {
        if (!millis) return "------";
        let minutes = Math.floor(millis / 60000);
        let secondsString = ((millis % 60000) / 1000).toFixed(0);
        let seconds = Number(secondsString);
        if (seconds === 0) return "------";
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    const totalTime = user && user.trails.reduce((acc, value) => acc += value.time, 0);
    if (!user) return null;


    return (
        <PopUpWrapper className={ isActive ? "popUpOpen" : "" }>
            <CloseButton/>
            <WrapperColumns>
                <LeftColumn>
                    <ParagraphPopUp>ID:<span>{ user && user.id }</span></ParagraphPopUp>
                    <ParagraphPopUp>FIRST
                        SESSION:<span>{ millisToHumanDate(user.firstSession) }</span></ParagraphPopUp>
                    <ParagraphPopUp>CONVERTED
                        SESSION:<span>{ millisToHumanDate(user.convertedSession) }</span></ParagraphPopUp>
                    <ParagraphPopUp>TIME TO CONVERT [MIN]:
                        <span>
                            { millisToMinutesAndSeconds(totalTime) }
                        </span>
                    </ParagraphPopUp>
                    <ParagraphPopUp>DEVICE DURING CONVERSION:<span>{ user.device }</span></ParagraphPopUp>
                    <ParagraphPopUp>COUNTRY:<span>{ user.country }</span></ParagraphPopUp>
                    <ParagraphPopUp>TRAFFIC SOURCE:<span>{ user.trafficSource }</span></ParagraphPopUp>
                </LeftColumn>
                <RightColumn>
                    <TitlePopUp>TRAIL FROM START TO CONVERT</TitlePopUp>
                    <BoxesWrapper>
                        {
                            user.trails.map((trail, index) => {
                                return (
                                    <SingleBoxWrapper key={ index }>
                                        <BoxPopUp>
                                            <NumberOfBoxPopUp>{ index += 1 }</NumberOfBoxPopUp>
                                            <ParagraphPopUpBox>Visited: <span>{ trail.url }</span></ParagraphPopUpBox>
                                            <VisitInfoBoxPopUp><strong>Date: </strong>{ millisToHumanDate(trail.sessionDate) }
                                            </VisitInfoBoxPopUp>
                                            <TimeInfoBoxPopUp><strong>Time: </strong>{ millisToMinutesAndSeconds(trail.time) }
                                            </TimeInfoBoxPopUp>
                                        </BoxPopUp>
                                        <ArrowNextStep/>
                                    </SingleBoxWrapper>
                                );
                            })
                        }
                        <SingleBoxWrapper>
                            <BoxPopUp>
                                <ParagraphPopUpBox>CONVERTED</ParagraphPopUpBox>
                                <VisitInfoBoxPopUp><strong>Time: </strong>
                                    {
                                        user.trails.map((trail, index) => index === user.trails.length - 1 && millisToHumanDate(trail.sessionDate))
                                    }
                                </VisitInfoBoxPopUp>
                                <TimeInfoBoxPopUp><strong>Device:</strong>{ user.device }</TimeInfoBoxPopUp>
                            </BoxPopUp>
                            <SuccessIcon/>
                        </SingleBoxWrapper>
                    </BoxesWrapper>
                </RightColumn>
            </WrapperColumns>
        </PopUpWrapper>

    );
};

export default UsersTablePopUpP;