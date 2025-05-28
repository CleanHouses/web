import {
  Avatar,
  Box,
  Card,
  Group,
  Rating, Stack,
  Text, Title
} from "@mantine/core";
import { motion } from 'framer-motion';
import styles from './Testimonials.module.scss';
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: 'Natalia Martínez',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Excelente servicio de limpieza. Muy profesionales y atentos a los detalles.',
  },
  {
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Very satisfied with the service. The cleaner was punctual and polite.',
  },
  {
    name: 'Maria López',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: '¡Me encantó el resultado! Todo quedó impecable. Volveré a contratar.',
  },
];

export const  Testimonials = () => {
  const { t } = useTranslation();
  return (
    <Box className={styles.testimonials}>
        <Title order={5} mb="sm">
          {t("common.peopleLoveUs")}
        </Title>
        <Box className={styles.content}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <Card shadow="lg" radius="lg" padding="lg" bg="none" w={300} h={120}>
              <Group mb="sm">
                <Avatar src={t.avatar} alt={t.name} radius="xl" />
                <div>
                  <Text size="sm" fw={600}>{t.name}</Text>
                  <Rating value={t.rating} readOnly size="xs"  color="hsl(43, 100%, 68%)"/>
                </div>
              </Group>
              <Text size="sm" c="dimmed">
                {t.text}
              </Text>
            </Card>
          </motion.div>
        ))}
        </Box>
      </Box>
  );
}
