import { Tabs, List, Typography, Image, Space } from "antd";
import dayjs from "dayjs";
import { useUnit } from "effector-react";
import { ITVShow } from "shared/api";
import { ScheduleList } from "shared/ui/schedule-list";
import { ScheduleGate, stores, tood, toom, yest } from "./model";
import s from "./styles.module.css";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const Schedule = () => {
  const [todaySchedule, yesterdaySchedule, tomorrowSchedule] = useUnit(stores);

  const mappedTSchedule = yest.map((tvShow) => (
    <ScheduleList tvShow={tvShow} />
  ));
  const mappedYSchedule = tood.map((tvShow) => (
    <ScheduleList tvShow={tvShow} />
  ));
  const mappedTomSchedule = toom.map((tvShow) => (
    <ScheduleList tvShow={tvShow} />
  ));

  return (
    <div>
      <ScheduleGate />
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: `Вчера`,
            key: "1",
            children: <List itemLayout="horizontal">{mappedTSchedule}</List>,
          },
          {
            label: `Сегодня`,
            key: "2",
            children: <List itemLayout="horizontal">{mappedYSchedule}</List>,
          },
          {
            label: `Завтра`,
            key: "3",
            children: <List itemLayout="horizontal">{mappedTomSchedule}</List>,
          },
        ]}
      />
    </div>
  );
};
