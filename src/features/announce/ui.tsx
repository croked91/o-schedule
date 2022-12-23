import { Button, Image, Space, Typography } from "antd";
import { useGate, useStore } from "effector-react";
import { Link, useParams } from "react-router-dom";
import { getFormatedTime } from "./lib";
import { $currentTVShow, AnnounceGate } from "./model";
import s from "./styles.module.scss";

const { Title, Text } = Typography;

export const Announce = () => {
  const param = useParams();
  useGate(AnnounceGate, param.time);
  const { name, announce, time } = useStore($currentTVShow);

  return (
    <Space direction="vertical" align="center" className={s.tvshow}>
      <Space direction="vertical" align="center" className={s.tvshow__card}>
        <Title level={1}>{name}</Title>
        <Image src={announce.image.path} width={500} preview={false} />
        <Text>{announce.short_text}</Text>
        <Typography.Link
          target="_blank"
          href={`https://www.kanal-o.ru/announce/${announce.id}`}
        >
          Подробнее
        </Typography.Link>
        <Text>Начало в {getFormatedTime(time)}</Text>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </Space>
    </Space>
  );
};
