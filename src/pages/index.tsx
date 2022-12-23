import { useStore } from "effector-react";
import { Schedule } from "entity/schedule";
import { $schedule } from "entity/schedule/model";
import { Announce } from "features/announce";
import { Navigate, Route, Routes } from "react-router-dom";

export const Routing = () => {
  const schedule = useStore($schedule);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/" element={<Schedule />} />
      {schedule.map(({ time }) => (
        <Route key={time} path=":time" element={<Announce />} />
      ))}
    </Routes>
  );
};
