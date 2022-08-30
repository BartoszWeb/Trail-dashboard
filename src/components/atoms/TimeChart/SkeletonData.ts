import { TimeChartData } from "../../../services/api/timeChartApi";

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const generateSkeletonData = () => {
    return days.reduce((acc: {}, value: string) => {
        return {
            ...acc, [value]: [
                { hour: "0", value: 0 },
                { hour: "1", value: 0 },
                { hour: "2", value: 0 },
                { hour: "3", value: 0 },
                { hour: "4", value: 0 },
                { hour: "5", value: 0 },
                { hour: "6", value: 0 },
                { hour: "7", value: 0 },
                { hour: "8", value: 0 },
                { hour: "9", value: 0 },
                { hour: "10", value: 0 },
                { hour: "11", value: 0 },
                { hour: "12", value: 0 },
                { hour: "13", value: 0 },
                { hour: "14", value: 0 },
                { hour: "15", value: 0 },
                { hour: "16", value: 0 },
                { hour: "17", value: 0 },
                { hour: "18", value: 0 },
                { hour: "19", value: 0 },
                { hour: "20", value: 0 },
                { hour: "21", value: 0 },
                { hour: "22", value: 0 },
                { hour: "23", value: 0 },
            ],
        };
    }, {});
};

export const skeletonData = generateSkeletonData() as TimeChartData;