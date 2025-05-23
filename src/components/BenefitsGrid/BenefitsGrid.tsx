import { SimpleGrid, Container, Title } from "@mantine/core";
import { BenefitCard } from "./BenefitCard";
import { IconSparkles, IconClockHour4, IconShieldCheck, IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const BenefitsGrid = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,     // анимация один раз
    threshold: 0.5,        // сработает, когда 20% элемента в зоне видимости
  });

  const benefits = [
    {
      icon: <IconSparkles />,
      title: "Spotless Results",
      description: "Your space will shine with our detailed and professional cleaning approach.",
    },
    {
      icon: <IconClockHour4 />,
      title: "Time-Saving Service",
      description: "Let us handle the cleaning while you focus on what matters most.",
    },
    {
      icon: <IconShieldCheck />,
      title: "Trusted Professionals",
      description: "All cleaners are background-checked, trained, and insured.",
    },
    {
      icon: <IconLeaf />,
      title: "Eco-Friendly Products",
      description: "We use safe, green cleaning supplies for a healthy environment.",
    },
  ];

  return (
    <Container
      py="xl"
      h="100vh"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
      <Title order={1} mb="xl">
        Why Choose Our Cleaning Service?
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing="xl">
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
      </SimpleGrid>
    </Container>
  );
};
