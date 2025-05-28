import { Grid } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { IProductProps } from "./product.props";
import { ServiceCard, PageHeader } from "../../components";
import { PRODUCT_MOCK, SOON } from "../../data";

import styles from "./product.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

export const Product: FC<IProductProps> = () => {
  const { t } = useTranslation();
  const cards = [...PRODUCT_MOCK, ...SOON].map((product, i) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.5, duration: 0.4 }}
    >
    <ServiceCard id={product.id} title={product.title} description={product.descriptions} isSoon={product.isSoon} pictureLink={product.images?.main}/>
    </motion.div>
  ))
  const isMobile = useMediaQuery("(max-width: 710px)");

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <PageHeader title={t("product.title")} text={t("product.text")}/>
        <Grid gutter="lg">

          {cards.slice(0, 3).map((card, index) => (
            <Grid.Col key={index} span={isMobile ? 12 : 4}>
              {card}
            </Grid.Col>
          ))}

          {cards.slice(3, 5).map((card, index) => (
            <Grid.Col key={index + 3} span={isMobile ? 12 : 6}>
              {card}
            </Grid.Col>
          ))}

        </Grid>
      </div>
    </section>
  );
};
