import dayjs from "dayjs";

export const chartTime = (e: string) => {
    const defaultPeriodOfTime = dayjs().endOf("day").subtract(3, "years").format("YYYY") + " - " + dayjs().endOf("day").subtract(0, "years").format("YYYY");

    switch (e) {
        case "all":
            const all = dayjs().endOf("day").subtract(3, "years").format("YYYY") + " - " + dayjs().endOf("day").subtract(0, "years").format("YYYY");
            return all;
        case "today":
            const today = dayjs().subtract(1, "days").format("MMMM D, YYYY h:mm A") + " - " + dayjs().format("MMMM D, YYYY h:mm A");
            return today;
        case "yesterday":
            const yesterday = dayjs().startOf("hours").subtract(2880, "minutes").format("MMMM D, YYYY h:mm A") + " - " + dayjs().startOf("hours").subtract(1440, "minutes").format("MMMM D, YYYY h:mm A");
            return yesterday;
        case "week":
            const week = dayjs().subtract(7, "days").format("MMMM D, YYYY h:mm A") + " - " + dayjs().subtract(0, "days").format("MMMM D, YYYY h:mm A");
            return week;
        case "month":
            const month = dayjs().subtract(1, "month").format("MMMM D, YYYY h:mm A") + " - " + dayjs().subtract(0, "days").format("MMMM D, YYYY h:mm A");
            return month;
        case "quarter":
            const quarter = dayjs().subtract(3, "month").format("MMMM D, YYYY h:mm A") + " - " + dayjs().subtract(0, "days").format("MMMM D, YYYY h:mm A");
            return quarter;
        case "year":
            const year = dayjs().subtract(1, "year").format("MMMM D, YYYY h:mm A") + " - " + dayjs().subtract(0, "days").format("MMMM D, YYYY h:mm A");
            return year;
        default:
            return defaultPeriodOfTime;
    }
};