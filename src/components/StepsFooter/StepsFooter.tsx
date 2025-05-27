import React from "react";
import { Button, Group } from "@mantine/core";
import styles from "../../pages/booking/BookingStepper.module.scss";

export const StepsFooter = ({onNext, onBack, nextTitle="Next"}:{onBack?: () => void, onNext?: () => void, nextTitle?: string}  ) => (
  <Group justify="space-between" mt="md">
    {onBack && (
      <Button variant="outline" onClick={onBack} radius="lg" color="rgb(231, 231, 231)">Back</Button>
    )}
    <Button onClick={onNext} className={styles.nextButton} radius="lg" style={{ backgroundColor: '#6c6ce5' }}>{nextTitle}</Button>
  </Group>
);