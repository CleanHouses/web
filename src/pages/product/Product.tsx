import { Card, Container, Image, SimpleGrid, Stack, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { IProductProps } from "./product.props";
import { Shapes, Button} from "../../components";
import { PRODUCT_MOCK } from "../../data";

import styles from "./product.module.scss";
import { IconCalendarEvent } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const Product: FC<IProductProps> = () => {
  const navigate = useNavigate();

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
        <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing="xl">
          {PRODUCT_MOCK.map((product) => (
            <Card
              className={styles.product_card} key={product.id}
              shadow="lg"
              padding="lg"
              radius="xl"
              >
              <div className={styles.product_thumbnail}>
                <Image src={product?.images?.main} alt="" className={styles.product_img} h={300}/>
                <div className={styles.product_mask}></div>
                {product.isSoon && <div className={styles.product_soon}></div>}
              </div>
              <span className={styles.product_category}>{product.title}</span>
              <h3 className={styles.product_title}>{product.descriptions}</h3>
              <Button
                buttonType={product.isSoon ? "outline" : "primary"}
                pos="absolute"
                bottom="1rem"
                right="1rem"
                onClick={() => (product.isSoon ? "" : navigate(`/booking/${product.id}`))}
                leftSection={<IconCalendarEvent size={18} />}
                radius="lg">
                {product.isSoon ? "Soon" : " Book now"}
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </motion.section>
  );
};
