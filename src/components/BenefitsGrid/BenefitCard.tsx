import { Card, Group, Text } from "@mantine/core";
import { ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card
      shadow="md"
      padding="md"
      radius="xl"
      w="300"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease',
      }}
    >
      <Group h={50} align="center">
        <div style={{ fontSize: 36 }}>{icon}</div>
        <Text fw={700} m={0} p={0}>
          {title}
        </Text>
      </Group>

      <Text fz="sm">
        {description}
      </Text>
    </Card>
  );
}
