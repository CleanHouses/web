import {  Title, Stack } from "@mantine/core";
import { BenefitCard } from "./BenefitCard";
import { IconSparkles, IconClockHour4, IconShieldCheck, IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export const BenefitsGrid = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,     // анимация один раз
    threshold: 0.2,        // сработает, когда 20% элемента в зоне видимости
  });

  const benefits = [
    {
      icon: <IconSparkles />,
      title: t("common.whyChoose.results.title"),
      description:  t("common.whyChoose.results.text"),
    },
    {
      icon: <IconClockHour4 />,
      title: t("common.whyChoose.timeSaving.title"),
      description:  t("common.whyChoose.timeSaving.text"),
    },
    {
      icon: <IconShieldCheck />,
      title: t("common.whyChoose.trustedProfessionals.title"),
      description:  t("common.whyChoose.trustedProfessionals.text"),
    },
    {
      icon: <IconLeaf />,
      title: t("common.whyChoose.EcoFriendly.title"),
      description:  t("common.whyChoose.EcoFriendly.text"),
    },
  ];

  return (
    <Stack>
      <Title order={5} mt="lg" ta="center">
        {t("common.whyChoose.title")}
      </Title>
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          ref={ref}
          initial={{ y: 50 }}
          animate={inView ? { y: 10 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BenefitCard
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        </motion.div>
      ))}
    </Stack>
  );
};
