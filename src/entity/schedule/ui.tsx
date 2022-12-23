import { List, Tabs } from "antd";
import { useUnit } from "effector-react";
import { ScheduleList } from "shared/ui/schedule-list";
import { getLabel } from "./lib";
import { ScheduleGate, stores } from "./model";

export const Schedule = () => {
  const schedules = useUnit(stores);

  const items = schedules.map((schedule, i) => {
    const id = String(i + 1);
    return {
      label: getLabel(i),
      key: id,
      children: (
        <List itemLayout="horizontal">
          {schedule.map((tvShow) => (
            <ScheduleList key={tvShow.time} tvShow={tvShow} />
          ))}
        </List>
      ),
    };
  });

  return (
    <div>
      <ScheduleGate />
      <Tabs defaultActiveKey="2" items={items} />
    </div>
  );
};
