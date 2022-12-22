import { createEffect, createStore } from "effector";
import { createGate } from "effector-react";
import { ITVShow } from "shared/api";
import { getScheduleByType } from "./lib";

const url = "/schedule.json";

export const fetchScheduleFx = createEffect(async (): Promise<ITVShow[]> => {
  const res = await fetch(url);
  const shedule = await res.json();
  return shedule;
});

export const $yesterdaySchedule = createStore<ITVShow[]>([]).on(
  fetchScheduleFx.doneData,
  (_, data) => getScheduleByType(data, "yesterday")
);

export const $todaySchedule = createStore<ITVShow[]>([]).on(
  fetchScheduleFx.doneData,
  (_, data) => getScheduleByType(data, "today")
);

export const $tomorrowSchedule = createStore<ITVShow[]>([]).on(
  fetchScheduleFx.doneData,
  (_, data) => getScheduleByType(data, "tomorrow")
);

export const ScheduleGate = createGate();
ScheduleGate.open(fetchScheduleFx());

export const stores = [
  $todaySchedule,
  $yesterdaySchedule,
  $tomorrowSchedule,
]
