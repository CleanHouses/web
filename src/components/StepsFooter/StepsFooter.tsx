import React from "react";
import { Group } from "@mantine/core";
import { Button } from "../_ui";
import { useTranslation } from "react-i18next";

export const StepsFooter = ({onNext, onBack, nextTitle="next"}:{onBack?: () => void, onNext?: () => void, nextTitle?: string}  ) => {
  const { t } = useTranslation();
  return (
  <Group justify="space-between" mt="md">
    <Button buttonType="outline" onClick={onBack} radius="lg" color="rgb(231, 231, 231)">{t("common.back")}</Button>
    <Button onClick={onNext} buttonType="primary" radius="lg">{t(`common.${nextTitle}`)}</Button>
  </Group>
)};