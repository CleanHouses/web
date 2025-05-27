import React from "react";
import { Container, Stack, Text, Title } from "@mantine/core";

export const PageHeader = ({title, text}: {title: string, text: string}) => (
  <Container size="sm" py="lg">
    <Stack align="center">
      <Title order={2} mb="sm" ta="center">
        {title}
      </Title>
      <Text mb="md" ta="center">
        {text}
      </Text>
    </Stack>
  </Container>
);