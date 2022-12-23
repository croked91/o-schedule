import { List, Image, Typography, Space } from "antd";
import dayjs from "dayjs";
import { ITVShow } from "shared/api";

export const ScheduleList = (props: { tvShow: ITVShow }) => {
  const { tvShow } = props;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={
          <Image src={tvShow.announce.image.path} width={220} preview={false} />
        }
        title={
          <Typography.Title level={4}>
            {`${tvShow.name} ${tvShow.announce.agerating}`}
          </Typography.Title>
        }
        description={
          <Space direction="vertical">
            <Typography.Text type="secondary">
              {dayjs(+tvShow.time * 1000).format("HH:mm")}
            </Typography.Text>
            <Typography.Text type="secondary">
              {dayjs.duration(+tvShow.length * 1000).format("H ч. mm м.")}
            </Typography.Text>
            <Typography.Text type="secondary" strong>
              {tvShow.announce.short_text}
            </Typography.Text>
          </Space>
        }
      />
    </List.Item>
  );
};
