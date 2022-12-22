import { useUnit } from "effector-react";
import { ScheduleGate, stores } from "./model";

export const Schedule = () => {
  const [todaySchedule, yesterdaySchedule, tomorrowSchedule] = useUnit(stores);

  const mappedTSchedule = todaySchedule.map((tvShow) => (
    <div key={tvShow.announce.id}>{tvShow.name}</div>
  ));
  const mappedYSchedule = yesterdaySchedule.map((tvShow) => (
    <div key={tvShow.announce.id}>{tvShow.name}</div>
  ));
  const mappedTomSchedule = tomorrowSchedule.map((tvShow) => (
    <div key={tvShow.announce.id}>{tvShow.name}</div>
  ));
  return (
    <div>
      <ScheduleGate />
      {mappedTSchedule}
      ------------------
      {mappedYSchedule}
      ------------------
      {mappedTomSchedule}
    </div>
  );
};
