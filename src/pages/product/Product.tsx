import { Container, Stack, Title, Text, Grid } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { IProductProps } from "./product.props";
import { Shapes, ServiceCard } from "../../components";
import { PRODUCT_MOCK, SOON } from "../../data";

import styles from "./product.module.scss";
import { useMediaQuery } from "@mantine/hooks";

export const Product: FC<IProductProps> = () => {

  const cards = [...PRODUCT_MOCK, ...SOON].map((product, i) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.3, duration: 0.2 }}
    >
    <ServiceCard id={product.id} title={product.title} description={product.descriptions} isSoon={product.isSoon} pictureLink={product.images?.main}/>
    </motion.div>
  ))
  const isMobile = useMediaQuery("(max-width: 710px)");

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.wrapper}>
      <div className={styles.content}>
        <Shapes />
        <Container size="sm" py="xl">
          <Stack align="center">
            <Title order={2} mb="sm">
              Book a Cleaning Service with Ease
            </Title>
            <Text mb="lg" ta="center">
              Whether it's a deep clean, regular maintenance, or post-renovation — we’re here to make your space shine.
              Simply choose the type of service, pick a convenient date, and select a professional. We’ll handle the
              rest.
            </Text>
          </Stack>
        </Container>
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
    </motion.section>
  );
};
