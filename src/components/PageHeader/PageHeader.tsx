import React from "react";
import { Container, Stack, Text, Title } from "@mantine/core";
import styles from "./PageHeader.module.scss";

export const PageHeader = ({title, text}: {title: string, text: string}) => (
  <Container size="sm" py="lg">
    <Stack align="center">
      <Title className={styles.title} mb="sm" ta="center">
        {title}
      </Title>
      <Text mb="md" ta="center">
        {text}
      </Text>
    </Stack>
  </Container>
);