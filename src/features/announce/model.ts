import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { $schedule } from "entity/schedule/model";
import { ITVShow } from "shared/api";

const initState = {
  name: "",
  time: "",
  length: 0,
  announce: {
    id: "",
    title: "",
    short_text: "",
    agerating: "",
    year: "",
    type: "",
    genre: "",
    image: {
      title: "",
      path: "",
    },
  },
};

export const $currentTVShow = createStore<ITVShow>(initState);

export const AnnounceGate = createGate();

sample({
  clock: AnnounceGate.open,
  source: $schedule,
  fn: (schedule, params): ITVShow => {
    return schedule.find((TVShow) => TVShow.time === params);
  },
  target: $currentTVShow,
});
