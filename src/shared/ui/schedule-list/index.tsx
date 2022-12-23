import { Image, List, Space, Typography } from "antd";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Link } from "react-router-dom";
import { ITVShow } from "shared/api";
import { DURATION_FORMAT, TIME_FORMAT } from "shared/config";
dayjs.extend(duration);

export const ScheduleList = (props: { tvShow: ITVShow }) => {
  const { tvShow } = props;

  return (
    <>
      <Link to={`${tvShow.time}`}>
        <List.Item>
          <List.Item.Meta
            avatar={
              <Image
                src={tvShow.announce.image.path}
                width={220}
                preview={false}
              />
            }
            title={`${tvShow.name} ${tvShow.announce.agerating}`}
            description={
              <Space direction="vertical">
                <Typography.Text type="secondary">
                  {dayjs(+tvShow.time * 1000).format(TIME_FORMAT)}
                </Typography.Text>
                <Typography.Text type="secondary">
                  {dayjs
                    .duration(+tvShow.length * 1000)
                    .format(DURATION_FORMAT)}
                </Typography.Text>
                <Typography.Text type="secondary" strong>
                  {tvShow.announce.short_text}
                </Typography.Text>
              </Space>
            }
          />
        </List.Item>
      </Link>
    </>
  );
};
