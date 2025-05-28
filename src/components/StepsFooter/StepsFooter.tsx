import React from "react";
import { Group } from "@mantine/core";
import { Button } from "../_ui";

export const StepsFooter = ({onNext, onBack, nextTitle="Next"}:{onBack?: () => void, onNext?: () => void, nextTitle?: string}  ) => (
  <Group justify="space-between" mt="md">
    <Button buttonType="outline" onClick={onBack} radius="lg" color="rgb(231, 231, 231)">Back</Button>
    <Button onClick={onNext} buttonType="primary" radius="lg">{nextTitle}</Button>
  </Group>
);