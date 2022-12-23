import { combine, createEffect, createStore } from "effector";
import { createGate } from "effector-react";
import { ITVShow } from "shared/api";
import { getScheduleByType } from "./lib";

const url = "/schedule.json";

export const fetchScheduleFx = createEffect(async (): Promise<ITVShow[]> => {
  const res = await fetch(url);
  return await res.json();
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

export const stores = [$yesterdaySchedule, $todaySchedule, $tomorrowSchedule];

export const $schedule = combine(
  $yesterdaySchedule,
  $todaySchedule,
  $tomorrowSchedule,
  (
    $yesterdaySchedule: ITVShow[],
    $todaySchedule: ITVShow[],
    $tomorrowSchedule: ITVShow[]
  ) => [...$yesterdaySchedule, ...$todaySchedule, ...$tomorrowSchedule]
);

export const ScheduleGate = createGate();
ScheduleGate.open(fetchScheduleFx());

//Мок сторы
// export const yest = getScheduleByType(mockSchedule, "yesterday");
// export const tood = getScheduleByType(mockSchedule, "today");
// export const toom = getScheduleByType(mockSchedule, "tomorrow");
