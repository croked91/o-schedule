import dayjs from "dayjs";
import { TIME_FORMAT } from "shared/config";

export const getFormatedTime = (time: string) => {
  return dayjs(+time * 1000).format(TIME_FORMAT);
};
