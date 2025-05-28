import { Badge, Card, Text, Image } from "@mantine/core";
import {
  IconCalendarEvent,
  IconThumbUp
} from "@tabler/icons-react";
import React, { FC } from "react";
import styles from "./service.module.scss";
import { Button } from "../_ui";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface IServiceCard {
  isSoon?: boolean;
  title?: string;
  id: number | string;
  description?: string;
  pictureLink?: string;
}

export const ServiceCard: FC<IServiceCard> = ({id, title, description, isSoon, pictureLink}) => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  return (
    <Card
      withBorder
      radius="lg"
      className={styles.container}
      onClick={() => (isSoon ? "" : navigate(`/services/booking/${id}`))}
    >
      <Card.Section className={styles.imgWrapper}>
        <Image className={styles.img} src={pictureLink} />
        <div className={styles.badges}>
          <Badge color="hsl(353, 100%, 65%)">{t(`common.${title}`)}</Badge>
          <Badge
            leftSection={<IconThumbUp size={15} />}
            color="hsl(43, 100%, 68%)"
          >
            {t("common.goodPrice")}
          </Badge>
        </div>
        <Text size="sm" fw={500} className={styles.description}>
          {description}
        </Text>
        <Button
          buttonType={isSoon ? "outline" : "primary"}
          pos="absolute"
          bottom="1rem"
          right="1rem"
          onClick={() => (isSoon ? "" : navigate(`/services/booking/${id}`))}
          leftSection={<IconCalendarEvent size={18} />}
          radius="lg">
          {isSoon ? t("common.soon") : t("common.bookNow")}
        </Button>
      </Card.Section>
    </Card>
  );
};