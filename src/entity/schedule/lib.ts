import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isYesterday from "dayjs/plugin/isYesterday";
import { ITVShow } from "../../shared/api/interface";

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(isTomorrow);

export const getScheduleByType = (
  data: ITVShow[],
  type: "tomorrow" | "yesterday" | "today"
) => {
  switch (type) {
    case "yesterday": {
      return data.filter((e) => dayjs(+e.time * 1000).isYesterday());
    }
    case "today": {
      return data.filter((e) => dayjs(+e.time * 1000).isToday());
    }
    case "tomorrow": {
      return data.filter((e) => dayjs(+e.time * 1000).isTomorrow());
    }
    default:
      return;
  }
};
