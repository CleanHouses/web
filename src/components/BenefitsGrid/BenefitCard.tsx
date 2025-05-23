import { Card, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card
      shadow="lg"
      padding="lg"
      radius="xl"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease',
      }}
      className="hover:scale-105"
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <Text fw={700} fz="xl" mb={4}>
        {title}
      </Text>
      <Text fz="sm">
        {description}
      </Text>
    </Card>
  );
}
